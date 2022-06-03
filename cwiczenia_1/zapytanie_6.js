var new_person = {'sex': 'Male',
                'first_name': 'Aliaksandr',
                'last_name': 'Reznik',
                'job': 'Business Analyst',
                'email': 's25881@pjwstk.edu.pl',
                'location': {'city': 'Warsaw',
                'address': {'streetname': 'Belgradzka', 'streetnumber': '111'}},
                'description': 'consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent',
                'height': '178.12',
                'weight': '77.55',
                'birth_date': '2001-01-01T01:01:01Z',
                'nationality': 'Poland',
                'credit': 
                    [{'type': 'maestro',
                    'number': '201578948740843',
                    'currency': 'PLN',
                    'balance': '9999.85'},
                    {'type': 'jcb',
                    'number': '4844504000289788',
                    'currency': 'SEK',
                    'balance': '3388.39'},
                    {'type': 'mastercard',
                    'number': '3560760172372810',
                    'currency': 'EUR',
                    'balance': '5569.67'}]
                }

try {
    cursor = db.people.insertOne(new_person)
}
catch (e) {
    print(e)
}

printjson(cursor)