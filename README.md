# PhoneticDict_Web

Pleco for french language learners

Website online at : phonetic.thomasparadis.me

Often when learning a foreign language, we hear a lot of new words.
Problem is we don't know how to spell them, so it may be hard to search for their meaning in a dictionary.
For chinese learners it's easy, just enter the pinyin ! You input "tante" and find "忐忑 : nervous"
But for french learners ? French doesn't have pinyin and spelling is difficult.
Now, with "PhoneticDict" you can input the french pronunciation and find the spelling and definition !

DISCLAIMER :
This app is designed for french language learners who have already learned basic french pronunciation.
Please read "HOW TO USE" first.

In the future I plan to do English-Chinese to help english learners.

# How to deploy

1. Copy db file "dict.mysql" from `https://github.com/Cephalopode/PhoneticDict_Parser/blob/master/dict.mysql` to this directory
1. `docker-compose up -d db`
1. `docker-compose exec -T db mysql -pGLAEbjpCB2EHsaGA dict < dict.mysql`
1. `docker-compose up -d app`
