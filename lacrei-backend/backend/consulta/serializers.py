from rest_framework import serializers
from consulta.models import Consulta
from datetime import date

class ConsultaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Consulta
        fields = '__all__'
        
    def validate_data(self, value):
        if value < date.today():
            raise serializers.ValidationError("A data da consulta não pode estar no passado.")
        return value