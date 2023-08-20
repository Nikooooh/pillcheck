import Remedio from '../../Imagens/remedio1.jpg';
import Dipirona from '../../Imagens/dipirona.jpg';
import Doril from '../../Imagens/doril.jpg';
import Benegrip from '../../Imagens/benegrip.jpg';
import Befenol from '../../Imagens/perfenol.jpg';
import Resfenol from '../../Imagens/resfenol.jpg';
import Xanax from '../../Imagens/xanax.jpg';
import Sedafit from '../../Imagens/sedatif.jpg';
import Dramin from '../../Imagens/dramin.jpg';
import Atroveran from '../../Imagens/atroveran.jpg';
import Fluimucil from '../../Imagens/fluimucil.jpg';
import Neosaldina from '../../Imagens/neosaldina.jpg';
import Novalgina from '../../Imagens/novalgina.jpg';
import Serenata from '../../Imagens/serenata.png';

export const products = [
    {
      image: Remedio,
      name: 'Cloridrato de Ondansetrona 8mG',
      price: 'R$ 49,90',
      category: 'nauseas',
      description:'Para que serve Cloridrato de Ondansetrona? Adultos: O cloridrato de ondansetrona é indicado para o controle de náuseas e vômitos induzidos por quimioterapia e radioterapia. Também é indicado para prevenção de náuseas e vômitos do período pós-operatório.',
      slug: 'cloridrato-de-ondansetrona-8mg',
    },
    {
      image: Dipirona,
      name: 'Cloridrato de Dipirona 10 Comprimidos',
      price: 'R$ 29,90',
      category: 'dor-e-febre',
      description:'A dipirona é um medicamento analgésico e antitérmico eficaz para o alívio temporário de dores e redução da febre. É importante usar a dipirona com responsabilidade, seguindo as instruções de uso e buscando orientação médica se necessário. O conhecimento sobre o medicamento e seus efeitos colaterais contribui para um uso seguro e eficaz. ',
      slug: 'cloridrato-de-dipirona-10-comprimidos',
    },
    {
        image: Doril,
        name: 'Doril 10 Comprimidos',
        price: 'R$ 19,90',
        category: 'dor-e-febre',
        description:'Doril é um medicamento utilizado para o alívio temporário de dores leves a moderadas e para a redução da febre. É importante usar conforme as instruções e consultar um profissional de saúde se houver dúvidas ou preocupações. O uso responsável e informado de Doril pode proporcionar alívio dos sintomas de forma eficaz e segura.',
        slug: 'doril-10-comprimidos',
    },
    {
        image: Befenol,
        name: 'Perfenol 30 cápsulas',
        price: 'R$ 59,90',
        category: 'gripe-e-resfriados',
        description:'Este medicamento é útil para tratar os sintomas associados a resfriados e gripes, como congestão nasal, dor de cabeça, febre, espirros e corrimento nasal. No entanto, é importante usar este medicamento conforme as instruções e sob a orientação de um profissional de saúde. Além disso, devido à possibilidade de sonolência causada pelo Maleato de Clorfeniramina, deve-se ter cuidado ao dirigir ou operar máquinas pesadas ao tomar medicamentos que contenham este componente.',
        slug: 'befenol-30-cápsulas',
    },
    {
        image: Resfenol,
        name: 'Resfenol 30 comprimidos',
        price: 'R$ 39,90',
        category: 'gripe-e-resfriados',
        description:'Este medicamento é útil para tratar os sintomas associados a resfriados e gripes, como congestão nasal, dor de cabeça, febre, espirros e corrimento nasal. No entanto, é importante usar este medicamento conforme as instruções e sob a orientação de um profissional de saúde. Além disso, devido à possibilidade de sonolência causada pelo Maleato de Clorfeniramina, deve-se ter cuidado ao dirigir ou operar máquinas pesadas ao tomar medicamentos que contenham este componente.',
        slug: 'resfenol-30-comprimidos',
    },
    {
        image: Benegrip,
        name: 'Benegrip com 4 unidades',
        price: 'R$ 9,90',
        category: 'gripe-e-resfriados',
        description:'O Benegrip é um medicamento utilizado no Brasil para aliviar sintomas de gripes e resfriados. Ele combina o Paracetamol, que alivia dores e reduz a febre; o Cloridrato de Fenilefrina, que atua como descongestionante nasal; e o Maleato de Clorfeniramina, um anti-histamínico que trata sintomas alérgicos como espirros e corrimento nasal. Devido à presença do Maleato de Clorfeniramina, pode causar sonolência em alguns usuários. É indicado para alívio sintomático da gripe e resfriado.',
        slug: 'benegrip-com-4-unidades',
    },
    {
        image: Xanax,
        name: 'Alprazolam 1mg 30 comprimidos',
        price: 'R$ 89,00',
        category: 'sono-e-ansiedade',
        description:'O Alprazolam é um medicamento pertencente à classe dos benzodiazepínicos. É frequentemente prescrito para tratar distúrbios de ansiedade, ataques de pânico e, às vezes, outros transtornos. Ele atua no sistema nervoso central para produzir efeitos sedativos, ansiolíticos e relaxantes musculares. Devido ao seu potencial de causar dependência e tolerância, o uso de Alprazolam deve ser de curto prazo e sob supervisão médica. Além disso, pode causar sonolência, portanto, é aconselhável ter cautela ao dirigir ou operar máquinas pesadas durante seu uso.',
        slug: 'alprazolam-1mg-30-comprimidos',
    },
    {
        image: Serenata,
        name: 'Sertralina 60 comprimidos',
        price: 'R$ 169,90',
        category: 'sono-e-ansiedade',
        description:'A Sertralina é um antidepressivo pertencente à classe dos inibidores seletivos da recaptação de serotonina (ISRS). É frequentemente prescrita para tratar depressão, transtorno obsessivo-compulsivo (TOC), transtorno do pânico, transtorno de ansiedade social, transtorno de estresse pós-traumático (TEPT) e outros transtornos de humor e ansiedade. A Sertralina atua aumentando os níveis de serotonina no cérebro, um neurotransmissor envolvido na regulação do humor e do comportamento. Como qualquer medicamento, a Sertralina pode apresentar efeitos colaterais, e seu uso deve ser monitorado por um médico. Não é recomendado interromper o tratamento abruptamente, pois isso pode causar sintomas de descontinuação.',
        slug: 'sertralina-60-comprimidos',
    },
    {
        image: Sedafit,
        name: 'Sedatif 30 cápsulas',
        price: 'R$ 55,90',
        category: 'sono-e-ansiedade',
        description:'Sedatif PC é um medicamento homeopático que é comumente utilizado para aliviar sintomas associados a estresse, ansiedade leve e distúrbios do sono. É promovido como uma opção não sedativa e, portanto, não deve causar sonolência.',
        slug: 'sedatif-30-cápsulas',
    },
    {
        image: Novalgina,
        name: 'Novalgina 500mg 10 comprimidos',
        price: 'R$ 22,90',
        category: 'dor-e-febre',
        description: 'A Novalgina, com seu princípio ativo dipirona, é um renomado analgésico e antipirético, muito utilizado para tratar dores moderadas, como dores de cabeça, cólicas menstruais e dor de dente, além de atuar na redução de febre. Por interferir no processo de síntese das prostaglandinas, contribui para aliviar a dor e o desconforto. A consulta com um profissional de saúde é recomendada antes da sua utilização.',
        slug: 'novalgina-500mg-10-comprimidos'
    },
    {
        image: Neosaldina,
        name: 'Neosaldina 10mL gotas',
        price: 'R$ 25,50',
        category: 'dor-e-febre',
        description: 'Neosaldina é uma combinação de analgésico, vasoconstritor e cafeína. Usada principalmente para combater dores de cabeça e enxaquecas, sua composição conta com a dipirona, que alivia a dor, o mucato de isometepteno, que tem efeito vasoconstritor, e a cafeína, que potencializa a ação dos outros componentes. Ao agir no sistema nervoso central, proporciona alívio rápido. Deve-se seguir a posologia indicada e consultar um médico se os sintomas persistirem.',
        slug: 'neosaldina-10ml-gotas'
    },
    {
        image: Dramin,
        name: 'Dramin B6 50mg 10 comprimidos',
        price: 'R$ 16,90',
        category: 'nauseas',
        description: 'Dramin B6 é amplamente utilizado para tratar e prevenir náuseas, vômitos e vertigens. Seu componente, o dimenidrinato, possui propriedades anti-histamínicas que aliviam sintomas de alergias, enquanto a vitamina B6 auxilia na diminuição da náusea, principalmente em gestantes. Embora eficaz, o medicamento pode causar sonolência, sendo recomendado cautela ao dirigir. Sempre siga a dosagem prescrita e consulte um médico se os sintomas persistirem.',
        slug: 'dramin-b6-50mg-10-comprimidos'
    },
    {
        image: Atroveran,
        name: 'Atroveran 10mL gotas',
        price: 'R$ 29,50',
        category: 'dor-e-febre',
        description: 'O Atroveran é conhecido por suas propriedades analgésicas e antiespasmódicas. Seus componentes, atropina e escopolamina, agem diretamente no sistema nervoso parassimpático, ajudando a reduzir cólicas e outros tipos de dores musculares. As gotas facilitam a dosagem e a absorção, tornando o alívio mais rápido. Como todo medicamento, o Atroveran deve ser usado conforme indicação médica e as instruções da bula devem ser rigorosamente seguidas.',
        slug: 'atroveran-10ml-gotas'
    },
    {
        image: Fluimucil,
        name: 'Fluimucil 600mg efervescente 10 comprimidos',
        price: 'R$ 35,90',
        category: 'gripe-e-resfriados',
        description: 'Fluimucil, com seu princípio ativo acetilcisteína, é um mucolítico que auxilia no tratamento de doenças respiratórias com secreção excessiva. Facilitando a expectoração, torna o muco mais fluido e fácil de ser eliminado. Além disso, suas propriedades antioxidantes ajudam a proteger os tecidos pulmonares. A versão efervescente se dissolve em água, permitindo rápida absorção. Consulte um médico para correta dosagem e instruções de uso.',
        slug: 'fluimucil-600mg-efervescente-10-comprimidos'
    }
    
  ];