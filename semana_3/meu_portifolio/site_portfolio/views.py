from django.shortcuts import render

# Create your views here.
def home(request):
    nome = 'Ester'
    conhecimentos = ['html', 'css', 'javaScript', 'python', 'django', 'git']
   
   
    # requerimento, o template e os valores que queremos add neste template {conhecimento...}
    return render (request, 'index.html', {'conhecimentos': conhecimentos, 'nome': nome})