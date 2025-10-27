from .autore import AutoreGetSerializer
from .libro import LibroManageSerializer , LibroStatisticSerializer
from .tessera_biblioteca import TesseraBibStatSerializer , TesseraDetailSerializer

__all__ = [

    #AUTORE

    'AutoreGetSerializer',

    #LIBRO

    'LibroManageSerializer',
    'LibroStatisticSerializer',

    #TESSERA BIBLIOTECA

    'TesseraBibStatSerializer',
    'TesseraDetailSerializer'
]