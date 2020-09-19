import requests
from flask import Flask
import json
import random
from flask import render_template

app = Flask(__name__)

def get_kintone_data():
      headers = {"X-Cybozu-API-Token": 'nFpmlTRpqrh9MrodacOvnIoxINhvVQQHe18eLipN'}
      return requests.get('https://mathwae.kintone.com/k/v1/records.json?app=5&id=1',headers=headers).json()


@app.route('/dataPass')
def dataPass ():
      text = json.dumps(get_kintone_data())

      array = text.split("00Z\"},")

      answer = []
      firstLine = 1

      badLine = 2

      goodLine = 3
      count = 0

      for i in range(2, 8 , 2):
            textG = array[i][105:]
            textP = textG.split("\"")
            answer.append(textP[1])
            count = count + 1


      listSize = len(answer)


      randomNumber = random.randrange(0, listSize)

      textA = answer[randomNumber]
  
      listAnswer = textA.split("\"")

      value = len(listAnswer)-1
      link=""

      link = listAnswer[value]
      

      return render_template('meme.html' , picture = link)





@app.route('/')
def index():
      return render_template('index.html')




if __name__ == '__main__':
      app.run(debug=True)





      
