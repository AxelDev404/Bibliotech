from .autore import AutoreGetSerializer , AutorePostSerializer
from .libro import LibroManageSerializer , LibroStatisticSerializer , LibroPostSerializer , LibroPatchSerializer
from .tessera_biblioteca import TesseraBibStatSerializer , TesseraDetailSerializer , TesseraBibliotecaPostSerializer ,TesseraBibliotecaPatchSerializer
from .postazione import SelectPostazioneSerializer , PostazionePostSerializer
from .categoria import CategoriaPostSerializer , CategoriaHlperSerializer
from .prestito import PrestitoFilterSerializer , PrestitoPostSerializer

__all__ = [

    #AUTORE

    'AutoreGetSerializer',
    'AutorePostSerializer',

    #LIBRO

    'LibroManageSerializer',
    'LibroStatisticSerializer',
    'LibroPostSerializer',
    'LibroPatchSerializer',

    #TESSERA BIBLIOTECA

    'TesseraBibStatSerializer',
    'TesseraDetailSerializer',
    'TesseraBibliotecaPostSerializer',
    'TesseraBibliotecaPatchSerializer',

    #POSTAZIONE

    'SelectPostazioneSerializer',
    'PostazionePostSerializer',

    #CATEGORIA

    'CategoriaPostSerializer',
    'CategoriaHlperSerializer',

    #PRESTITO
    'PrestitoFilterSerializer',
    'PrestitoPostSerializer',
]