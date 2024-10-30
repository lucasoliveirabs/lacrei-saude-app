from rest_framework.routers import DefaultRouter
from django.urls import path, include
from profissional.views import ProfissionalViewSet

router = DefaultRouter()
router.register(r'', ProfissionalViewSet, basename='profissional')

urlpatterns = [
    path('profissionais/', include(router.urls)),
]
