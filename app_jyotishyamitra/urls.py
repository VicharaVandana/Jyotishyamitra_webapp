from django.urls import path
from . import views

urlpatterns = [
    path('', views.homepage, name='homepage'),
    path('birthdata/', views.input_birthdata, name='birthdata'),
    path('contactus/', views.contactus, name='contactform'),
    path('birthdata/result/', views.computeastrodata, name="astrodatageneration"),
]