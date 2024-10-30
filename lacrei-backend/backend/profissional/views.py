from rest_framework.exceptions import NotFound
from profissional.models import Profissional
from profissional.serializers import ProfissionalSerializer
from rest_framework.response import Response
from rest_framework import viewsets
from django.utils.translation import gettext as _

class ProfissionalViewSet(viewsets.ModelViewSet):
    queryset = Profissional.objects.all()
    serializer_class = ProfissionalSerializer

    def retrieve(self, request, pk=None):
        try:
            profissional = Profissional.objects.get(pk=pk)
            return Response({"nome": profissional.nome})
        except Profissional.DoesNotExist:
            raise NotFound(detail=_("Profissional não encontrado."))