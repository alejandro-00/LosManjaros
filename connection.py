import mysql.connector
import grab

def connect(lh="localhost", usr="root", pwd="", db="concurso"):
    return mysql.connector.connect(host=lh, user=usr, passwd=pwd, database=db)

def insert(news):
    db = connect()
    cursor = db.cursor()

    add = ("INSERT INTO news "
              "(TYPE_ID, TITLE, SUBTITLE, AUTOR, SOURCE, IMG, TXT, LINK, DAT)"
              "VALUES (%(type_id)s, %(title)s, %(subtitle)s, %(autor)s, %(source)s, %(img)s,  %(txt)s, %(link)s, %(dat)s)")

    for el in news:
        cursor.execute(add, el)
        db.commit()

    cursor.close()
    db.close()

insert(grab.get_misc())