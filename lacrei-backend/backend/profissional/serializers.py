from rest_framework import serializers
from profissional.models import Profissional
from core.base_serializer import BaseSerializer

class ProfissionalSerializer(BaseSerializer, serializers.ModelSerializer):
    class Meta:
        model = Profissional
        fields = '__all__'

    def validate_contato(self, value):
        cleaned_value = value.replace(" ", "")
        if not cleaned_value.isdigit():
            raise serializers.ValidationError("O contato deve conter somente números.")
        return value