import jyotishyamitra as jsm
import jyotichart as jc



def generate_astrodata(bd):

    #step 1 :clear past input data
    jsm.clear_birthdata()

    #Step 2: Providing input birth data - here multiple times the API input_birthdata are invoked but you can do it in single shot too.
    #providing Name and Gender
    inputdata = jsm.input_birthdata(name=bd["name"], gender=bd["gender"])

    #providing Date of birth details
    inputdata = jsm.input_birthdata(year=bd["DOB"]["year"], month=bd["DOB"]["month"], day=bd["DOB"]["day"])

    #Providing Place of birth details
    inputdata = jsm.input_birthdata(place=bd["POB"]["name"], longitude=bd["POB"]["lon"], lattitude=bd["POB"]["lat"], timezone=bd["POB"]["timezone"])

    #Providing Time of birth details
    inputdata = jsm.input_birthdata(hour=bd["TOB"]["hour"], min=bd["TOB"]["min"], sec=bd["TOB"]["sec"])

    #Step 3: Validate Birthdata
    jsm.validate_birthdata()

    #Step 4: If Birthdata is valid then get birthdata
    if(jsm.IsBirthdataValid()):
        birthdata = jsm.get_birthdata()
    else:
        print("Error:birthdata is invalid!!!")


    #Step 5: Invoke the API generate_astrologicalData with retrunval desired to be dictionary and get astrological data in dictionary format.
    ad = jsm.generate_astrologicalData(birthdata, returnval = "ASTRODATA_DICTIONARY") 
    return ad