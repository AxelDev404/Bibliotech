from .autore import AutoreGetSerializer
from .libro import LibroManageSerializer , LibroStatisticSerializer
from .tessera_biblioteca import TesseraBibStatSerializer , TesseraDetailSerializer
from .postazione import SelectPostazioneSerializer

__all__ = [

    #AUTORE

    'AutoreGetSerializer',

    #LIBRO

    'LibroManageSerializer',
    'LibroStatisticSerializer',

    #TESSERA BIBLIOTECA

    'TesseraBibStatSerializer',
    'TesseraDetailSerializer',

    #POSTAZIONE

    'SelectPostazioneSerializer'
]