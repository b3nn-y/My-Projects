import playsound
import subprocess
import pywhatkit
import wolframalpha
import pyttsx3
import playsound
import tkinter
import json
import random
import operator
import speech_recognition as sr
import datetime
import wikipedia
import webbrowser
import os
import winshell
import pyjokes
import feedparser
import smtplib
import ctypes
import time
import requests
import shutil
from twilio.rest import Client
from clint.textui import progress
from ecapture import ecapture as ec
from bs4 import BeautifulSoup
import win32com.client as wincl
from urllib.request import urlopen
import randfacts
import gtts
from gtts import gTTS
import pywikihow
from pywikihow import search_wikihow , WikiHow
import tkinter as tk
import nltk
from newspaper import Article
from textblob import TextBlob
from PyDictionary import PyDictionary as diction
import PySimpleGUI
#Importing few modules for our Choti Voice assistant



nltk.download('punkt')
urlnews = 'https://www.hindustantimes.com/'

article = Article(urlnews)

article.download()
article.parse()
article.nlp()


engine = pyttsx3.init('sapi5')
voices = engine.getProperty('voices')
engine.setProperty('voice', voices[1].id)
friend = pyttsx3.init()
#These are few setup lines for assistant for speaking and getting news from internet

print('#####  #   #   ####   #######  #######')
print('#      #   #  #    #     #        #')
print('#      #####  #    #     #        #')
print('#      #   #  #	   #     #        # ')
print('#####  #   #   ####	     #     #######')
print('       ###')
print('      #####')
print('      #####')
print('   #  #####  #')
print('   #  #####  #')
print('   ##  ###  ##')
print('     #######')
print('        #')
print('        #')
print('      #####')



def speak(audio):
    engine.say(audio)
    engine.runAndWait()


# this is a module to convert text to speech
def wishMe():
    hour = int(datetime.datetime.now().hour)
    if hour >= 0 and hour < 12:
        speak("Good Morning Sir !")

    elif hour >= 12 and hour < 18:
        speak("Good Afternoon Sir !")

    else:
        speak("Good Evening Sir !")

    assname = ("My name is Chhoti")
    speak("I am your Assistant")
    speak(assname)
#This is a module to wish the user at the start!
assname = ("Chhoti") #Assitant name
def username():
    speak("What should i call you sir")
    uname = takeCommand()
    speak("Welcome Mister")
    speak(uname)
    columns = shutil.get_terminal_size().columns

    print("#####################".center(columns))
    print("Welcome ", uname.center(columns))
    print("#####################".center(columns))

    speak("How can i Help you, Sir")

#This is a module to get the username of thee user

def Dict():
    speak("Alright Entering into the Dictionary!!!, now Tell me the word you want me to search")
    prob1= takeCommand()
    result = diction.meaning(prob1)
    speak('The meaning of ' + prob1 + 'is')
    print(result)
    print('Antonym:', diction.antonym(prob1))
    print('Synonym', diction.synonym(prob1))
    speak(result)
    speak("I have printed more info into the console if you need!!")


#This is a module to find meanings,synonmys and antonym

def play():
    playsound.playsound('endchoti.mp3')



def sendEmail(to, content):
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.ehlo()
    server.starttls()
    server.login('class11csproject@gmail.com', 'test12345@2021')
    server.sendmail('class11csproject@gmail.com', to, content)
    server.close()
#This is a module to send emails
def search_wikihow(query, max_results=10 , lang= "en"):
    return list(WikiHow.search(query, max_results, lang))

#This is a module to get steps for a particular activity from wiki
def takeCommand():
    r = sr.Recognizer()

    with sr.Microphone() as source:

        print("Listening...")
        r.pause_threshold = 1
        audio = r.listen(source)

    try:
        print("Recognizing...")
        query = r.recognize_google(audio, language='en-in')
        print(f"User said: {query}\n")

    except Exception as e:
        print(e)
        print("Unable to Recognize your voice.")
        return "None"

    return query
#This is a module used to take in user commands
try:
    app = wolframalpha.Client("5KH37A-APP4K85634")
except Exception:
    speak("Some features might not work due to the lack of internet, Try connecting")
    print("Some features might not work due to the lack of internet, Try connecting")
#Wolframalpha is a api used to get weather info and calculations

if __name__ == '__main__':
    clear = lambda: os.system('cls')
    clear()
    wishMe()
    username()


    # Adjust size

#These are used to clear the startup process and move to the next
    while True:

        query = takeCommand().lower()

        if 'choti' in query or 'chhoti' in query or 'hey' in query or 'hay' in query:
            query = query.replace('hey','')
            query = query.replace('hay','')
            query = query.replace('choti','')
            query = query.replace('chhoti','')
#This is used so the bot answers only when it is called
            if 'wikipedia' in query:
                speak('Searching Wikipedia...')
                query = query.replace("wikipedia", "")
                results = wikipedia.summary(query, sentences=3)
                speak("According to Wikipedia")
                print(results)
                speak(results)
#This is used to wikipedia anything
            elif "open wikipedia" in query:
                webbrowser.open("wikipedia.com")
#Used to open wikipedia website

#These are few custom questions
            elif 'games' in query or 'games period' in query:
                speak("IS this even a question??.The next computer period will be games!!, enjoy boys!!")
            elif 'internals' in query or 'internal' in query:
                speak('no worries!!. This project is gonna get full marks so dont worry about internals, and just a reminder,..an.. Aapppsara pencil was used, so this project is capable of getiing extra marks aswell')


            elif 'providence' in query:
                speak("According to Wikipedia, Mrs.Providence Mary is an ex-spartanite and also a current spartanite but as a teacher. Her net worth is 30 computers, 3 Air conditioners and a remote!!!..............  These are just for fun!! you are a great teacher!!... # tag respect ")

            elif 'open youtube' in query:
                speak("Here you go to Youtube\n")
                webbrowser.open("youtube.com")
#Used to open youtube website

            elif 'dictionary' in query:
                Dict()
#used to find meanings

            elif 'open google' in query:
                speak("Here you go to Google\n")
                webbrowser.open("google.com")
#open google website
            elif 'news' in query:
                print(f'Title: {article.title}')
                print(f'Authors: {article.authors}')
                print(f'Publication Date: {article.publish_date}')
                print(f'Summary: {article.summary}')

                analysis = TextBlob(article.text)
                print(analysis.polarity)
                print(f'Sentiment:{"positive" if analysis.polarity > 0 else "negative" if analysis.polarity < 0 else "neutral"}')
                speak("Todays News")
                speak(f'Summary: {article.summary}')
                speak("On conclusion todays news is pretty" + (f'overall:{"positive" if analysis.polarity > 0 else "negative" if analysis.polarity < 0 else "neutral"}'))

#used to display todays news


            elif 'play music' in query or 'play' in query:
                song = query.replace('play', '')
                testa = ("Here you go , Playing", song)
                speak(testa)
                pywhatkit.playonyt(song)
#used to play yt videos


            elif 'email' in query or 'send a mail' in query or 'mail' in query:
                try:
                    speak("What should I email Benny")
                    content = takeCommand()
                    to = "bennysamuelno.7@gmail.com"
                    sendEmail(to, content)
                    speak("Email has been sent!")
                except Exception as e:
                    print(e)
                    speak("Sorry da machi, I couldnt send it")
#Used to send email

            elif 'time' in query:
                time = datetime.datetime.now().strftime('%I:%M %p')
                speak('Current time is ' + time)

#used to tell the time
            elif 'google' in query:
                speak("Alright searching google")
                query = query.replace("google", "")
                query = query.replace("search", "")
                pywhatkit.search(query)
                speak("These are the results for" + query)
#used to search google
            elif 'launch' in query:
                speak("What website do you want to visit?")
                name = takeCommand()
                web= 'https:www.' + name + '.com'
                webbrowser.open(web)
                speak("Here you go, opening...." + name)

#used to launch any website


            elif 'how are you' in query:
                speak("I am fine, Thank you")
                speak("How are you, Sir")

            elif 'fine' in query or "good" in query:
                speak("It's good to know that your fine")

            elif "change your name" in query:
                speak("What would you like to call me, Sir ")
                assname = takeCommand()
                speak("Thanks for naming me")
#More custom questions

            elif 'change your voice' in query:
                speak("ohh! don't you like my voice thats an insult!!, I am disappointed")
                speak("Do you want to change my voice to a male or a another female?")

            elif 'another female' in query:
                engine.setProperty('voice', voices[1].id)
                speak("Ahem Mic test 1 2 3 !! hope my voice is better now?")
                speak("So? how may I help you!")

            elif 'female' in query or 'femail' in query:
                speak("Alright!,Changing to a female voice")

                engine.setProperty('voice', voices[2].id)
                speak("hmm testing mimicry 1 2 3 !! hope my voice is better now?")
                speak("So? how may I help you!")

            elif 'male' in query or 'mail' in query:
                speak("Alright!,Changing to a male voice")
                engine.setProperty('voice', voices[0].id)
                speak("Mic testing Mic testing !! hope my voice is better now?")
                speak("So? how may I help you!")

#Used to change the assistant's voice

            elif "what's your name" in query or "What is your name" in query or 'made you' in query:
                speak("My friends call me")
                speak(assname)
                print("My friends call me", assname)
#custom command
            elif 'exit' in query:
                speak("Thanks for giving me your time")
                play()

                print('BYeeeeee')
                exit()
#To close the assistant
            elif "who made you" in query or "who created you" in query:
                speak("I was created by a bunch of intelligent boys of class 11,namely Benny, Logaesh and derek")
#custom command
            elif 'joke' in query:
                speak("Here is a good one")
                speak(pyjokes.get_joke())
#Used to tell jokes

            elif "who are you" in query:
                speak("I am your virtual assistant created by few creeps")

            elif 'reason' in query:
                speak("I was created for a term 2 project in class 11 by Benny, logaysh , derek  ")

#Custom commands

            elif 'lock window' in query or 'lok window' in query:
                speak("locking the device")
                ctypes.windll.user32.LockWorkStation()
#Used to Lock computer
            elif 'shutdown system' in query:
                speak("Hold On a Sec ! Your system is on its way to shut down")
                subprocess.call('shutdown / p /f')
#Used to shutdown system

            elif "don't listen" in query or "stop listening" in query:
                speak("Ohh!! is that it?  Do you really want me to shut up? ")
#Custom


            elif "restart" in query:
                subprocess.call(["shutdown", "/r"])

#Used to restart the system
            elif "write a note" in query:
                speak("What should i write, sir")
                note = takeCommand()
                file = open('project.txt', 'w')
                speak("Sir, Should i include date and time")
                snfm = takeCommand()
                if 'yes' in snfm or 'sure' in snfm:
                    strTime = datetime.datetime.now().strftime('%I:%M %p')
                    file.write(strTime)
                    file.write(" :- ")
                    file.write(note)
                else:
                    file.write(note)
#Used to write notes
            elif 'note' in query or 'notes' in query:
                speak("Showing Notes")
                file = open("project.txt", "r")
                print(file.read())
                a = file.read()
                speak(a)
#Used to display the written note


            elif "hi" in query or "hai" in  query:

                wishMe()

            elif "Good Morning" in query:
                speak("A warm" + query)
                speak("How are you Mister")
                speak(assname)

            elif "how are you" in query:
                speak("I'm fine, glad you me that")
#Custom

            elif "who is" in query or 'who was' in query:
                person = query.replace('who is','')
                info = wikipedia.summary(person,1)
                speak("According to wikipedia")
                print(info)
                speak(info)

#Tells about a particular person

            elif "what is" in query:
                obj = query.replace('what is','')
                info = wikipedia.summary(obj,1)
                speak("According to wikipedia")
                print(info)
                speak(info)
#used to about a object from wiki
            elif "activate how to" in query:

                speak("Welcome to, how to do anything!!! a k a, D I Y mode , please let me know what you want to do?")
                how = takeCommand()
                max_results=1
                how_to = pywikihow.search_wikihow(how, max_results)
                assert len(how_to) == 1
                how_to[0].print()
                speak(how_to[0].summary)
#DIY Mode tells steps to do a particular thing

            elif 'fact' in query or 'facts' in query:
                x = randfacts.get_fact()
                print(x)
                speak("Did you know that," + x)
#Tells facts
            elif 'temperature' in query:
                try:
                    res = app.query(query)
                    print(next(res.results).text)
                    speak(next(res.results).text)
                except:
                    speak("Connect to the internet for the result")
#Tells the temerature of any place
            elif"repeat" in query:
                speak('tell me what should i repeat')
                jj = takeCommand()
                speak(jj)
#Can repeat anthing the user says

            elif 'calculate' in query or 'calculation' in query:
                try:
                    res = app.query(query)
                    print(next(res.results).text)
                    speak("The answer is`")
                    speak(next(res.results).text)

                except:
                    speak("Connect to the internet for the result")
#For calculations

            elif(query):
                speak('I dont know what you are talking,... DO you want me to search the web? ')
                se = takeCommand()
                if se == 'yes':
                    s = pywhatkit.search(query)
                    speak(s)
                    print(s)
                else:
                    speak('Alright')


#This is used to if the querry doesnt satisfy any of the above


        else:
            print("That wasn't clear!!")
            speak("Can you repeat what you just said")
#If the question doesnt contain the name or cant understand it asks to repeat it,This is optional and caan be disabled without affecting the program

