import re
from rest_framework import serializers

class BaseSerializer(serializers.ModelSerializer):

    def validate_XSS(self, value):
        if isinstance(value, str) and re.search(r'<[^>]*>', value):
            raise serializers.ValidationError("HTML não é permitido como input.")
        return value

    def normalize(self, value):
        print("normalize")
        return value.strip() if isinstance(value, str) else value

    def validate(self, data):
        for field, value in data.items():
            if value:  
                value = self.normalize(value)
                value = self.validate_XSS(value)
                data[field] = value
        return data
