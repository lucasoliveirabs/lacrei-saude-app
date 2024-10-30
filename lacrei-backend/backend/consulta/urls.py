from rest_framework.routers import DefaultRouter
from django.urls import path, include
from consulta.views import ConsultaViewSet

router = DefaultRouter()
router.register(r'', ConsultaViewSet, basename='consulta')

urlpatterns = [
    path('consultas/', include(router.urls)),
]
