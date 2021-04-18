from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.index),
    path('about-us/<str:pk>', views.about,name='path1'),
    path('dialog/<str:pk>', views.dialog,name='path2'),
    path('mecha/<str:pk>', views.mecha,name='path3'),
    path('mecha2/<str:pk>',views.mecha2,name='path4'),
    path('history/<str:pk>',views.history,name='path5'),
    path('mecha3/<str:pk>',views.mecha3,name='path6'),
    path('achs/<str:pk>',views.achs,name='path7'),
    path('end',views.end)
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
