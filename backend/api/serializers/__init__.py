from .autore import AutoreGetSerializer
from .libro import LibroManageSerializer , LibroStatisticSerializer , LibroPostSerializer
from .tessera_biblioteca import TesseraBibStatSerializer , TesseraDetailSerializer
from .postazione import SelectPostazioneSerializer

__all__ = [

    #AUTORE

    'AutoreGetSerializer',

    #LIBRO

    'LibroManageSerializer',
    'LibroStatisticSerializer',
    'LibroPostSerializer',

    #TESSERA BIBLIOTECA

    'TesseraBibStatSerializer',
    'TesseraDetailSerializer',

    #POSTAZIONE

    'SelectPostazioneSerializer'
]