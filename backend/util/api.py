from pantheon import pantheon
import asyncio
from datetime import datetime

server = "americas"
api_key = "RGAPI-8475f21a-8233-4394-9d21-cf8bea97690d"
tournamentId = 6908
loop = asyncio.get_event_loop()  
panth = pantheon.Pantheon(server, api_key, errorHandling=True, debug=True)

async def getTournamentCodes(count,data):
    try:
        print("started api call: ",datetime.now())
        data = await panth.createTournamentCode(tournamentId, data, nb_codes=count, stub=True)
        print("ended api call: ",datetime.now())
        return data
    except Exception as e:
        print(e)
