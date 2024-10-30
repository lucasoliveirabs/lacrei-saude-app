from rest_framework import viewsets
from profissional.models import Profissional
from profissional.serializers import ProfissionalSerializer

class ProfissionalViewSet(viewsets.ModelViewSet):
    queryset = Profissional.objects.all()
    serializer_class = ProfissionalSerializer
