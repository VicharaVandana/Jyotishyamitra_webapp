from django.shortcuts import render
from .logic import generate_astrodata
import json

# Create your views here.
def homepage(request):
    return render(request, "index.html")

def input_birthdata(request):
    return render(request, 'birthdata.html')


def contactus(request):
    return render(request,'contactus.html')

def computeastrodata(request):
    # Prepare the birth data structure.
    bd = {}
    bd["name"] = request.POST['name']
    bd["gender"] = request.POST['gender']
    bd["DOB"] = {}
    bd["DOB"]["year"] = (request.POST['dob']).split("-")[0]
    bd["DOB"]["month"] = (request.POST['dob']).split("-")[1]
    bd["DOB"]["day"] = (request.POST['dob']).split("-")[2]
    bd["TOB"] = {}
    bd["TOB"]["hour"] = (request.POST['tob']).split(":")[0]
    bd["TOB"]["min"] = (request.POST['tob']).split(":")[1]
    bd["TOB"]["sec"] = "0"
    bd["POB"] = {}
    bd["POB"]["name"] = request.POST['PlaceName']
    bd["POB"]["lon"] = request.POST['lon']
    bd["POB"]["lat"] = request.POST['lat']
    bd["POB"]["timezone"] = request.POST['tz']

    astrodata = generate_astrodata(bd)
    
    return render(request, "result.html", {'astrodata': json.dumps(astrodata), 'birthdata':json.dumps(bd)})