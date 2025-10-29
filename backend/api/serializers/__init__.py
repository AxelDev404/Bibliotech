from .autore import AutoreGetSerializer , AutorePostSerializer
from .libro import LibroManageSerializer , LibroStatisticSerializer , LibroPostSerializer
from .tessera_biblioteca import TesseraBibStatSerializer , TesseraDetailSerializer , TesseraBibliotecaPostSerializer
from .postazione import SelectPostazioneSerializer , PostazionePostSerializer
from .categoria import CategoriaPostSerializer , CategoriaHlperSerializer

__all__ = [

    #AUTORE

    'AutoreGetSerializer',
    'AutorePostSerializer',

    #LIBRO

    'LibroManageSerializer',
    'LibroStatisticSerializer',
    'LibroPostSerializer',

    #TESSERA BIBLIOTECA

    'TesseraBibStatSerializer',
    'TesseraDetailSerializer',
    'TesseraBibliotecaPostSerializer',

    #POSTAZIONE

    'SelectPostazioneSerializer',
    'PostazionePostSerializer',

    #CATEGORIA

    'CategoriaPostSerializer',
    'CategoriaHlperSerializer',
]