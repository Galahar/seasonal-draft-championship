from django.db import models
from datetime import datetime    
from django.core.validators import MaxValueValidator, MinValueValidator

import util.api as a

# Create your models here.
class Game(models.Model):
    team1 = models.CharField(max_length=120)
    team2 = models.CharField(max_length=120)
    date = models.DateTimeField(default=datetime.now)
    mapType = models.CharField(max_length=120,choices=[('SUMMONERS_RIFT', 'Summoners Rift'), ('TWISTED_TREELINE', 'Twisted Treeline'), ('HOWLING_ABYSS', 'Howling Abyss')])
    pickType = models.CharField(max_length=120,choices=[('BLIND_PICK', 'Blind Pick'), ('DRAFT_MODE', 'Draft Pick'), ('ALL_RANDOM', 'All Random'), ('TOURNAMENT_DRAFT', 'Tournament Draft')])
    count = models.IntegerField(default=3, validators=[MaxValueValidator(10), MinValueValidator(1)])
    tournamentCodes = models.CharField(default="not generated",max_length=240)

    def _str_(self):
        return self.team1 + " vs " + self.team2 + ": " + str(date)
        
    def generate_Tournament_Codes(self):
        body={"mapType": self.mapType,"metadata": "","pickType": self.pickType,"spectatorType": "ALL","teamSize": 5}
        self.tournamentCodes = a.loop.run_until_complete(a.getTournamentCodes(self.count,body))
        
    def save(self, *args, **kwargs):
        if not self.pk:
            print("started generation: ",datetime.now())
            self.generate_Tournament_Codes()
            print("saved the model: ",datetime.now())
        super(Game, self).save(*args, **kwargs)

'''
list[str] allowedSummonerIds: list of all summonerId (optional)
            str mapType: map for the game
            str pickType: pick type for the game
            str spectatorType: spectator type for the game
            int teamSize: max number of player in a team
            str metadata: additional data to get back with the callback (optional)
'''