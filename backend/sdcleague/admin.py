from django.contrib import admin

# Register your models here.
from .models import Game

class GameAdmin(admin.ModelAdmin):
    list_display = ["team1","team2","date","mapType","pickType","count","tournamentCodes",]
    readonly_fields = ["tournamentCodes",]
# Register your models here.

admin.site.register(Game,GameAdmin)