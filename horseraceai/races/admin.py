from django.contrib import admin
from import_export.admin import ImportExportModelAdmin
from import_export import resources
from .models import Race, Horse


class RaceResource(resources.ModelResource):
    class Meta:
        model = Race
        skip_unchanged = True
        report_skipped = False


class HorseResource(resources.ModelResource):
    class Meta:
        model = Horse
        skip_unchanged = True
        report_skipped = False


@admin.register(Race)
class RaceAdmin(ImportExportModelAdmin):
    resource_class = RaceResource


@admin.register(Horse)
class HorseAdmin(ImportExportModelAdmin):
    resource_class = HorseResource
