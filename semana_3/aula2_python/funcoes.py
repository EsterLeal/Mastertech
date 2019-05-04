# from datatime import datatime, timedelta

# pessoa = {
#     'ano' :'',
#     'mes' :'',
#     'dia' :''
# }

# for chave in pessoa:
#    pessoa[str(chave)] = int(input('Digite o '+str(chave)))

# print (pessoa)

# def copa_do_mundo(pais,*anos):
#     print(f'País: {pais}')

#     for year in anos:
#         print (f'ano: {year}')

# copa_do_mundo('Brasil', '1958', '1962', '1970', '1994', '2002')

def copa_do_mundo(pais, **kargs):
    sede = kargs.get('sede')
    ano = kargs.get('ano')

    if sede:
        print(f'sede: {sede}')

    if ano:
        print(f'Ano: {ano}')

    print (pais)

copa_do_mundo('Brasil', sede="México", ano=62)