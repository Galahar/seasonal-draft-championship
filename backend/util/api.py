from datetime import datetime
import requests
import json

server = "americas"
api_key = "RGAPI-8475f21a-8233-4394-9d21-cf8bea97690d"
tournamentId = 6908

def fetch(url, method="GET", data=None):
    headers = {
        "X-Riot-Token": api_key
    }
    
    try:
        if method == "GET":
            response = request.get(url, headers=headers)
        elif method == "POST":
            response = requests.post(url, headers=headers, data=json.dumps(data))
    #In case of timeout
    except Exception as e:
        error.text = str(e) #make it so the error will be entered instead of the codes
        return error
    
    return response

def getTournamentCodes(count,data,stub):
    try:
        data = fetch(("https://{server}.api.riotgames.com/lol/tournament{stub}/v4/codes?count={nb_codes}&tournamentId={tournamentId}").format(server=server, stub="-stub" if stub else "", tournamentId=tournamentId, nb_codes=count), method="POST", data=data)
        return data.text
    except Exception as e:
        print(e)
