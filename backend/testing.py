from datetime import datetime
from pantheon import pantheon
import asyncio

server = "americas"
api_key = "RGAPI-8475f21a-8233-4394-9d21-cf8bea97690d"
tournamentId = 6908
loop = asyncio.get_event_loop()  
panth = pantheon.Pantheon(server, api_key, errorHandling=True, debug=True)

async def getTournamentCodes(count,data):
    try:
        print("started tournament code api call: ",datetime.now())
        data = await panth.createTournamentCode(tournamentId, data, nb_codes=count, stub=True)
        print("ended api call: ",datetime.now())
        return data
    except Exception as e:
        print(e)

async def getSummonerId(name):
    try:
        print("started summonerid api call: ",datetime.now())
        data = await panth.getSummonerByName(name)
        print("ended api call: ",datetime.now())
        return (data['id'],data['accountId'])
    except Exception as e:
        print(e)

# game information
mapType = 'SUMMONERS_RIFT'
pickType = 'TOURNAMENT_DRAFT'
count = 1
tournamentCodes = ""

  
def generate_Tournament_Codes():
    body={"mapType": mapType,"metadata": "","pickType": pickType,"spectatorType": "ALL","teamSize": 5}
    tournamentCodes = loop.run_until_complete(getTournamentCodes(count,body))
    print(tournamentCodes)
    
def getName():
    id = loop.run_until_complete(getSummonerId("Fug Nuggler"))
    print(id)
    
getName()
generate_Tournament_Codes()
