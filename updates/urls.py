from django.urls import path, include
from . import views

urlpatterns = [
    path('',views.index,name='index'),
    path('keyofferings/',views.services,name='services'),
    path('team',views.team,name='team'),
    path('blog',views.blog,name='blog'),
    path('blog/post',views.blog_detail,name='blog_detail'),
    path('contact',views.contact,name='contact'),
]