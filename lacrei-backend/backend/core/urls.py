from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from django.shortcuts import redirect

schema_view = get_schema_view(
    openapi.Info(
        title="Lacrei Saúde API",
        default_version='v1',
        description="Documentação das APIs de Consulta e Profissional",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="contato@lacrei.com"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('consulta.urls')),
    path('api/', include('profissional.urls')),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    
    re_path(r'^$', lambda request: redirect('swagger/', permanent=True)),
]
