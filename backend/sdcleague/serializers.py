from rest_framework import serializers
from .models import Game

class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = ["id","team1","team2","date","mapType","pickType","count","tournamentCodes",]
        read_only_fields = ["id","tournamentCodes",]