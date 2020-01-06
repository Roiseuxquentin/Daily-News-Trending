#!/bin/bash

################################################### 
#*/=============================================\*# 
# ||                      .__                  || #
# ||   ____   ____   ____ |  |   ____   ____   || #
# || _/ __ \_/ __ \ / ___\|  |  /  _ \ /  _ \  || #
# || \  ___/\  ___// /_/  >  |_(  <_> |  <_> ) || #
# ||  \___  >\___  >___  /|____/\____/ \____/  || #
# ||      \/     \/_____/                  2019|| #
#.\=============================================/.#
###################################################

#MAKE BUFFER INFO
touch ghost.info.html
#CATCH DATA
curl -s https://www.liberation.fr/top100/ | grep "</h2>" | head -n 25 | sed 's/<\|\/\|h2>//g' | sed 's/[[:blank:]][[:blank:]]//g' > ghost.info.html
#FORMAT DATA
cat ghost.info.html | sed '/^$/d' | sed 's/^/" /g' | sed 's/$/",/g' | sed '1i { "info" : [ ' | sed '$ s/.$/] , /' > /home/pi/Daily-News-Trending/pi/data/dailyData.json

echo ' img TOP 100 _ OK'
# Daily search trends
GOOFR=$(curl -s https://trends.google.com/trends/trendingsearches/daily/rss\?geo\=FR | grep '<title>' | sed 's/^.*<title>/"/g' | sed 's/<\/title>/",/g' | sed '1s/^.*$/[[  "🇫🇷",/g' | sed '$ s/.$/],/g' )
GOOIE=$(curl -s https://trends.google.com/trends/trendingsearches/daily/rss\?geo\=IE | grep '<title>' | head -n 5 | sed 's/^.*<title>/"/g' | sed 's/<\/title>/",/g' | sed '1s/^.*$/[ "🇮🇪",/g' | sed '$ s/.$/],/g' )
GOOGB=$(curl -s https://trends.google.com/trends/trendingsearches/daily/rss\?geo\=GB | grep '<title>' | head -n 5 | sed 's/^.*<title>/"/g' | sed 's/<\/title>/",/g' | sed '1s/^.*$/[ "🇬🇧",/g' | sed '$ s/.$/],/g' )
GOOBE=$(curl -s https://trends.google.com/trends/trendingsearches/daily/rss\?geo\=BE | grep '<title>' | head -n 5 | sed 's/^.*<title>/"/g' | sed 's/<\/title>/",/g' | sed '1s/^.*$/[ "🇧🇪",/g' | sed '$ s/.$/],/g' )
GOOUS=$(curl -s https://trends.google.com/trends/trendingsearches/daily/rss\?geo\=US | grep '<title>' | sed 's/^.*<title>/"/g' | sed 's/<\/title>/",/g' | sed '1s/^.*$/[ "🇺🇸",/g' | sed '$ s/.$/]],/g' )
echo '"gooSearch" : '$GOOFR $GOOIE $GOOGB $GOOBE $GOOUS >> /home/pi/Daily-News-Trending/pi/data/dailyData.json
echo ' google TOP _ OK'

# CITATION daily
CITATION=$(curl -s https://citations.ouest-france.fr/ | sed -n '/curtain bq/,/class="auteur"/p'| sed 's/"/`/g' | sed 's/^.*`auteur`>/",/g' | sed 's/<p>\|<\/p>//g' | sed '1s/^.*.$/"/g')
echo '"citation" : '$CITATION >> /home/pi/Daily-News-Trending/pi/data/dailyData.json
echo ' CITATION _ OK'

#CINEMA
CINEIMG=$(curl -s https://www.offi.fr/cinema/nouveautes.html | grep jpg | grep files | sed 's/url("\|"/\n/g' | grep images | grep  -v background | sed 's/^/"/g' | sed 's/$/",/g' | sed '$ s/.$//g' )
echo '"cinema" : ['$CINEIMG'],' >> /home/pi/Daily-News-Trending/pi/data/dailyData.json
echo ' CINEMA _ OK'

#FUTUR MOVIE
CINEFUTUR=$(curl -s http://www.allocine.fr/film/attendus/ |sed 's/</\n/g' | grep fichefilm | grep class | sed 's/^.*>//g' | head -n 21 | sed 's/^/"/g' | sed 's/$/",/g' | sed '$ s/.$//g'  )
CINEFUTURIMG=$(curl -s http://www.allocine.fr/film/attendus/ |sed 's/</\n/g' | grep img | grep Bande-annonce | head -n 21 |  sed 's/"/\n/g' | grep jpg | head -n 12 | sed 's/^/"/g' | sed 's/$/",/g' | sed '$ s/.$//g' )
echo '"futurCinema" : ['$CINEFUTUR'], "futurCinemaIMG" : ['$CINEFUTURIMG'],' >> /home/pi/Daily-News-Trending/pi/data/dailyData.json
echo ' CINEMA A VENIR _ OK'

#FILM
FILM=$(curl -s http://rss.allocine.fr/ac/cine/topfilms | grep "<title" |  sed '1,2d' | sed 's/^.*<title>\|<\/title>/"/g' | head -n 21 | sed 's/.$/,/g' | sed '$ s/.$//g' )
FILMIMG=$( curl -s http://rss.allocine.fr/ac/cine/topfilms | grep jpg | head -n 21 | sed 's/^.*url="/"/g'| sed 's/" type.*$/",/g' | sed '$ s/.$//g')
echo '"films" : ['$FILM'], "filmsIMG" : ['$FILMIMG'],' >> /home/pi/Daily-News-Trending/pi/data/dailyData.json
echo ' FILM TOP _ OK'
echo ' FILM IMG TOP _ OK'

#SERIE
SERIE=$(curl -s http://rss.allocine.fr/ac/series/top | grep "<title" |  sed '1,2d' | sed 's/^.*<title>\|<\/title>/"/g' | head -n 12 | sed 's/.$/,/g' | sed '$ s/.$//g' )
SERIEIMG=$( curl -s http://rss.allocine.fr/ac/series/top | grep jpg | head -n 12 | sed 's/^.*url="/"/g'| sed 's/" type.*$/",/g' | sed '$ s/.$//g')
echo '"series" : ['$SERIE'] , "seriesIMG" : ['$SERIEIMG'],' >> /home/pi/Daily-News-Trending/pi/data/dailyData.json
echo ' SERIE TOP _ OK'
echo ' SERIE IMG TOP _ OK'

#KULT
MINISTREKULTURE=$(curl -s https://www.culture.gouv.fr/rss/feed/actualites | grep title | head -n 5 | sed 's/"//g' | sed '1d' | sed 's/^.*<title>/"/g' |  sed 's/<.*$/",/g' | sed '$ s/.$//g' )
ART=$(curl -s https://www.lemonde.fr/arts/rss_full.xml | sed 's/</\n/g' | grep CDATA | sed 'n; d' | sed 's/"//g' | sed 's/^.*\[\|\].*$/"/g' | sed 's/.$/",/g' | head -n 10 | sed '$ s/.$//g'  )
echo '"ministereKult" : [ '$MINISTREKULTURE' ] , "mondeArt" : ['$ART'],' >> /home/pi/Daily-News-Trending/pi/data/dailyData.json
echo ' CULTURE _ OK'


#PARIS
SORTIE=$(curl -s https://www.sortiraparis.com/rss/sortir | grep title | sed 's/^.*DATA\[\|\].*$\|"//g' | sed '1,5d' | head -n 25 | sed 's/^/"/g' | grep -v "Que faire " | sed 's/$/",/g' | sed '$ s/.$//g' )
echo '"sorties" : ['$SORTIE'] ,' >> /home/pi/Daily-News-Trending/pi/data/dailyData.json
echo ' SORTIE PARIS _ OK'

# BITCOIN RATE
BTC=$(curl -s https://courscryptomonnaies.com/bitcoin | sed 's/>\| /\n/g' | grep € | grep x27 | sed 's/&#x27;\|<\/span//g' | sed 's/^/"/g' | sed 's/$/",/g')
echo '"btc" : '$BTC >> /home/pi/Daily-News-Trending/pi/data/dailyData.json
echo ' BITCOIN _ OK'

# Baril RATE
BARIL=$(curl -s https://prixdubaril.com/ | sed 's/</\n/g' | grep -A 2 "style=\"background-color: #333333" | sed 's/span>\|\ /\n/g' | grep -B 2 / | sed 's/\$\|\///g' | sed 's/^/"/g' | sed 's/$/\$",/g' | sed -n 1p )
echo '"baril" : '$BARIL >> /home/pi/Daily-News-Trending/pi/data/dailyData.json
echo ' BARIL _ OK'

# GOLD RATE
GOLD=$(curl -s https://www.kitco.com/gold-price-today-europe/ | grep -A 1 'price per ounce' | sed '1d' | sed 's/<td>\|<\/td>\|[[:blank:]]\|\n//g' | sed 's/^/"/g' | sed 's/.$/€",/g')
echo '"gold" : '$GOLD >> /home/pi/Daily-News-Trending/pi/data/dailyData.json
echo ' GOLD _ OK'

#CNRS
CNRS=$( curl -s https://lejournal.cnrs.fr/rss | grep title | sed 's/<\|>/\n/g' | grep -v 'title\|item\|^ $\|^$\|=\|channel' | head -n 3 | sed 's/^/"/g' | sed 's/$/",/g' | sed '$ s/.$//g')
echo '"cnrs" : [ '$CNRS'],'>> /home/pi/Daily-News-Trending/pi/data/dailyData.json 
echo ' CNRS _ OK'

#FUTURA SCIENCE
SCIENCE=$(curl -s https://www.futura-sciences.com/rss/actualites.xml | grep title | sed 's/^.*\[/"/g' | sed 's/\].*$/",/g' | sed 1d | head -n 8 | sed '$ s/.$//'  )
echo '"science" : [ '$SCIENCE'],'>> /home/pi/Daily-News-Trending/pi/data/dailyData.json 
echo ' SCIENCE _ OK'

# Photo 
TOF=$(curl -s https://www.liberation.fr/top100/ | grep url | sed 's/\ \|url(\|?modified/\n/g' | grep photo | grep medias | head -n 20 | sed 's/^/"/g' | sed 's/$/",/g' | sed '$ s/.$/] , /')
echo '"photo" : ['$TOF >> /home/pi/Daily-News-Trending/pi/data/dailyData.json
echo ' PHOTO _ OK'

# SANTE
# ARS
ARS=$(curl -s https://www.iledefrance.ars.sante.fr/rss.xml | grep '<title' | head -n 2 | sed '1d' |sed 's/"\|<\/title>//'| sed 's/<title>/"/g' | sed 's/$/",/g' )
OBS=$(curl -s https://www.nouvelobs.com/sante/rss.xml | sed 's/</\n/g' | grep DATA |sed 's/"//' | sed -n 1p | sed 's/^.*\[/"/g' | sed 's/\]\]>/"/g')
# SENTINEL
SENTINEL=$(curl -s https://www.sentiweb.fr/rss/fr/fr | grep title | grep DATA | tac | sed 's/"\|^.*2019.. -\|^.*bdo -//' | sed 's/^\|\].*$/"/g' | sed 's/$/,/g' | sed 's/Activit./risque/g' | sed 's/forte/fort/g' | sed 's/en m.dec.*$/",/g' | sed '$ s/.$/]/g' )
echo '"sante" : { "ars" : [ '$ARS $OBS '] , "sentinl" : [' $SENTINEL" } ," >> /home/pi/Daily-News-Trending/pi/data/dailyData.json
echo ' SANTE _ OK'

# GOUV 
GOUV=$(curl -s https://twitrss.me/twitter_user_to_rss/\?user\=gouvernementFR | grep '<title>' | sed 's/^.*<title>/","/g' | sed 's/<\/title>//' | sed '1s/",/[ /g' | sed 's/https.*$\|pic.twitter.com.*$//' | sed '$ s/.$/" ],/g' ) 
echo '"gouv" : '$GOUV >> /home/pi/Daily-News-Trending/pi/data/dailyData.json
echo ' GOUV _ OK'

# LE MONDE
UNE=$(curl -s https://www.lemonde.fr/rss/une.xml | sed 's/</\n/g' | grep CDATA | sed 's/"//' | head -n 10 | sed 's/!\[CDATA\[\|\]\]>/"/g' | sed 's/$/,/g' | sed '$ s/.$/] ,/g' | sed '1s/^/[/g' )
echo '"une" : '$UNE >> /home/pi/Daily-News-Trending/pi/data/dailyData.json
echo ' LE MONDE _ OK'

# TECHNO & ANSSI ACTU
ANSSI_ACTU=$(curl -s https://www.ssi.gouv.fr/feed/actualite/ | grep title | sed 1d | sed -n 1p | sed 's/^.*<title>/"/g' | sed 's/<\/title>/",/g' )
TECH=$(curl -s https://www.generation-nt.com/export/rss_techno.xml | grep title | sed 's/<title><!\[CDATA\[/"/g' | sed 's/\]\].*$/",/g' | grep -v GNT | head -n 6 | sed '$ s/.$/],/g')
echo '"tech" : ['$ANSSI_ACTU$TECH >> /home/pi/Daily-News-Trending/pi/data/dailyData.json
echo ' TECH _ OK'

# SECURITE INFO
CONSULTANT=$(curl -s https://www.dsfc.net/feed/ | grep '<title' | sed 's/title>/"/g' | sed 's/<\|\t//g' | sed 's/\/"/",/g' |  head -n 6 | sed '$ s/.$//' | sed 1d )
echo '"consultantCyber" : ['$CONSULTANT'],' >> /home/pi/Daily-News-Trending/pi/data/dailyData.json
UNDERNEWS=$(curl -s http://feeds.feedburner.com/undernews/ | grep '<title' | sed 's/title>/"/g' | sed 's/<\|\t//g' | sed 's/\/"/",/g' | head -n 7 | sed '$ s/..$//g' | sed 1d | sed 1d)
echo '"undernews" : ['$UNDERNEWS'],' >> /home/pi/Daily-News-Trending/pi/data/dailyData.json
echo ' HACK NEWS _ OK'

#Meurice chronique
MEURICE_TITLE=$(curl -s 'http://radiofrance-podcast.net/podcast09/rss_14257.xml' | grep "<title>"| sed -n 3p | sed 's/^.*<title>\|<\/tit.*$/"/g' )
echo '"meurice" : '$MEURICE_TITLE' ,' >> /home/pi/Daily-News-Trending/pi/data/dailyData.json
echo ' MEURICE _ OK'

# KORBEN 
## BLOQUER SI TROP DE REQUETE
# KORBEN=$(curl -s https://korben.info/feed | grep "<title>" | grep -v 'Korben\|Edito' | head -n 5 | sed 's/^.*<title>/"/g' | sed 's/<\/title>/",/g' | sed '$ s/.$//g' )
# KORBEN=$(curl -s https://korben.info/feed | grep "<title>" | grep -v 'Korben\|Edito' | head -n 5 | sed 's/^.*<title>/"/g' | sed 's/<\/title>/",/g' | sed '1s/^/[/g' | sed '$ s/.$/],/g' )
# echo '"korben" : [ '$KORBEN '],' >> /home/pi/Daily-News-Trending/pi/data/dailyData.json
# echo ' KORBEN _ OK'

# --------------------------------------------------------------------------------------------------------
## Audio
###JOURNAL
	# Détermine le moment de la journee
H=$(date +%-H)

if (( $H < 13 ))
then
	infoAudio="http://radiofrance-podcast.net/podcast09/rss_12559.xml"
elif (( $H < 19 ))
  then
    infoAudio="http://radiofrance-podcast.net/podcast09/rss_11673.xml"
else
  infoAudio="http://radiofrance-podcast.net/podcast09/rss_11736.xml"
fi

INFOAUDIO=$(curl -s "$infoAudio" | grep -m 1 "mp3" | sed 's/^.*url="\|" len.*$//g' ) 
echo '"newsaudio" : "'$INFOAUDIO'",' >> /home/pi/Daily-News-Trending/pi/data/dailyData.json
echo "AUDIO OK"

# --------------------------------------------------------------------------------------------------------

# VIDEO ZAP TV
# curl -s 'https://www.youtube.com/channel/UCoRnHlbVByoYV6st5kPxOIQ/featured' | sed 's/href/\n href/g' | grep href | grep watch | sed 's/"/\n/g' | grep watch | head -n 2 | sed 1d 



#curl -s https://www.ecoconso.be/last-publication-feed | grep title

##TWITTER

#MAKE BUFFER TWITTER PARIS
touch ghost.twitter.html
#CATCH DATA
curl -s "https://trends24.in/france/paris/" > ghost.twitter.html
#SPLIT DATA
cat ghost.twitter.html | sed 's/https/\n/g' | grep -o 'twitter.com/search?q=.*/a>' | sed 's/\(<\/a>\|">\|\/\)/\n/g' | sed 's/=\|twitter/\nsearch/g' | grep -v 'search' | sed -r '/^\s*$/d' > ghost.twitter.buffer
#FORMAT DATA
head -n 50 ghost.twitter.buffer | awk '!a[$0]++' | sed 's/$/",/' | sed 's/^/"/' | sed '1i "twitter" : [ " ",  " 🇫🇷 " ," ", ' | sed '$ s/.$/ , /' >> /home/pi/Daily-News-Trending/pi/data/dailyData.json
##REMOVE DUPPLICATE => uniq don't work .... sort -u break order...
#awk '!a[$0]++'

#CATCH DATA TWITTER WORLD
curl -s "https://trends24.in/" > ghost.twitter.html
#SPLIT DATA
cat ghost.twitter.html | sed 's/https/\n/g' | grep -o 'twitter.com/search?q=.*/a>' | sed 's/\(<\/a>\|">\|\/\)/\n/g' | sed 's/=\|twitter/\nsearch/g' | grep -v 'search' | sed -r '/^\s*$/d' > ghost.twitter.buffer
#FORMAT DATA
head -n 50 ghost.twitter.buffer | awk '!a[$0]++' | sed 's/$/",/' | sed 's/^/"/' | sed '1i " ", " 🌎 "," ", ' |  sed '$ s/.$/ , /' >> /home/pi/Daily-News-Trending/pi/data/dailyData.json

#CATCH DATA TWITTER AMERIQUE
curl -s "https://trends24.in/united-states/" > ghost.twitter.html
#SPLIT DATA
cat ghost.twitter.html | sed 's/https/\n/g' | grep -o 'twitter.com/search?q=.*/a>' | sed 's/\(<\/a>\|">\|\/\)/\n/g' | sed 's/=\|twitter/\nsearch/g' | grep -v 'search' | sed -r '/^\s*$/d' > ghost.twitter.buffer
#FORMAT DATA
head -n 50 ghost.twitter.buffer | awk '!a[$0]++' | sed 's/$/",/' | sed 's/^/"/' | sed '1i " ", " 🇺🇸 "," ", ' | sed '$ s/.$/] }/' >> /home/pi/Daily-News-Trending/pi/data/dailyData.json
echo ' TWITTER _ OK'



# --------------------------------------------------------------------------------------------------------
#CLEAN
rm ghost.*

#jq is json validator
cat /home/pi/Daily-News-Trending/pi/data/dailyData.json | jq empty

echo "__________"
echo "JSON _ OK"
echo "__________"
echo "_______D0n3"
