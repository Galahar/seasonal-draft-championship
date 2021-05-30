from django.db import models
from datetime import datetime    
from computedfields.models import ComputedFieldsModel, computed

# Create your models here.
class Game(models.Model):
    team1 = models.CharField(max_length=120)
    team2 = models.CharField(max_length=120)
    date = models.DateTimeField(default=datetime.now)
    mapType = models.CharField(max_length=120)
    pickType = models.CharField(max_length=120)
    count = models.IntegerField()
    @computed(models.TextField(), depends=[['self', ['mapType','pickType','count']]])
    def tournamentCodes(self):
        return self.mapType + " " + self.pickType + " " + str(self.count)

    def _str_(self):
        return self.team1 + " vs " + self.team2 + ": " + str(date)