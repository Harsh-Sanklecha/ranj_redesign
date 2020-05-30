from django.shortcuts import render

def index(request):
    return render(request,'index.html')

def team(request):
    return render(request,'team.html')

def blog(request):
    return render(request,'blog.html')

def blog_detail(request):
    return render(request, 'post_detail.html')

def contact(request):
    return render(request, 'contact.html')

def services(request):
    return render(request, 'services.html')
