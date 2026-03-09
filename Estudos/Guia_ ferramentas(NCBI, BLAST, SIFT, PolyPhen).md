# 🧬 Guia Prático de Ferramentas de Bioinformática

## NCBI • BLAST • SIFT • PolyPhen

Este guia apresenta um **passo a passo prático** das principais
ferramentas usadas em bioinformática para análise de sequências,
identificação de genes e predição de mutações.

------------------------------------------------------------------------

# 1️⃣ NCBI (National Center for Biotechnology Information)

## O que é

O **NCBI** é um dos maiores repositórios mundiais de dados biológicos.
Ele reúne bancos de dados de:

- DNA
- RNA
- proteínas
- genomas completos
- artigos científicos

🌐 Site: https://www.ncbi.nlm.nih.gov

------------------------------------------------------------------------

## Principais ferramentas do NCBI

Ferramenta Função
  ------------- ----------------------------
**Entrez**    Sistema de busca integrado
**GenBank**   Banco de sequências de DNA
**PubMed**    Literatura científica
**BLAST**     Comparação de sequências
**OMIM**      Genes e doenças humanas

------------------------------------------------------------------------

## Como buscar uma sequência

### Passo a passo

1. Acesse: https://www.ncbi.nlm.nih.gov
2. No campo de busca selecione **Nucleotide** ou **Protein**
3. Digite o nome do gene ou proteína

Exemplo:

    insulin homo sapiens

4. Clique em **Search**
5. Escolha uma sequência da lista
6. Use a opção **FASTA** para obter a sequência bruta

Formato FASTA:

    >Gene_example
    ATGCGTACGATCGATCGATCGATCGAT

------------------------------------------------------------------------

# 2️⃣ BLAST

## O que é

O **BLAST (Basic Local Alignment Search Tool)** é uma ferramenta para
comparar sequências biológicas e identificar similaridades.

Ele permite descobrir:

- genes semelhantes
- relações evolutivas
- função provável de proteínas

🌐 https://blast.ncbi.nlm.nih.gov

------------------------------------------------------------------------

## Tipos de BLAST

Tipo Comparação
  ------------- ----------------------------
**BLASTn**    DNA vs DNA
**BLASTp**    proteína vs proteína
**BLASTx**    DNA traduzido vs proteínas
**tBLASTn**   proteína vs DNA traduzido

------------------------------------------------------------------------

## Como usar BLAST

### Passo a passo

1. Entre em: https://blast.ncbi.nlm.nih.gov
2. Escolha o tipo de BLAST (ex: **Nucleotide BLAST**)
3. Cole a sequência FASTA

Exemplo:

    >example_sequence
    ATGGCGGCTGCTGCTGCTGCTG

4. Escolha o banco de dados (ex: nr ou refseq)
5. Clique em **BLAST**

------------------------------------------------------------------------

## Interpretando resultados

### Score

Indica o nível de similaridade

Quanto **maior**, melhor.

### E-value

Indica a significância estatística

Quanto **menor**, melhor.

Exemplo:

Score E-value
  ------- ---------
200 0.0
150 1e-50
50 0.01

------------------------------------------------------------------------

# 3️⃣ SIFT

## O que é

**SIFT (Sorting Intolerant From Tolerant)** prediz se uma substituição
de aminoácido afeta a função de uma proteína.

Ele se baseia em **conservação evolutiva**.

🌐 https://sift.bii.a-star.edu.sg

------------------------------------------------------------------------

## Como usar

### Passo a passo

1. Acesse o site do SIFT
2. Escolha **SIFT Sequence**
3. Cole a sequência da proteína em FASTA

Exemplo:

    >protein_example
    MTEYKLVVVGAGGVGKSALTIQLIQNHFVDEYDPTIEDSYRK

4. Insira a mutação

Exemplo:

    R139H

5. Execute a análise

------------------------------------------------------------------------

## Interpretando resultados

Score Significado
  --------- ------------------------------
≤ 0.05 mutação provavelmente danosa
\> 0.05 mutação tolerada

Exemplo:

    Mutation: R139H
    Score: 0.01
    Prediction: Deleterious

------------------------------------------------------------------------

# 4️⃣ PolyPhen

## O que é

**PolyPhen (Polymorphism Phenotyping)** prediz o impacto de mutações de
aminoácidos na estrutura e função de proteínas.

🌐 http://genetics.bwh.harvard.edu/pph2/

------------------------------------------------------------------------

## Como usar

### Passo a passo

1. Acesse o site do PolyPhen
2. Informe o identificador da proteína (UniProt)

Exemplo:

    P30968

3. Informe a posição da mutação

Exemplo:

    139

4. Informe a substituição

Exemplo:

    R → H

5. Clique em **Submit**

------------------------------------------------------------------------

## Interpretando resultados

Resultado Significado
  ------------------- -------------------------
Benign não afeta a proteína
Possibly damaging possível impacto
Probably damaging forte impacto funcional

Exemplo:

    Mutation: R139H
    Prediction: Probably damaging
    Score: 0.98

------------------------------------------------------------------------

# 🧪 Fluxo típico de análise em bioinformática

    NCBI → obter sequência
           ↓
    BLAST → encontrar homólogos
           ↓
    SIFT → avaliar mutação
           ↓
    PolyPhen → prever impacto estrutural

------------------------------------------------------------------------

# 🧠 Dicas importantes

✔ Sempre use **múltiplas ferramentas de predição**

✔ Compare **sequência selvagem vs mutante**

✔ Confirme resultados **experimentalmente quando possível**

✔ Use bancos de dados atualizados

------------------------------------------------------------------------

# 📚 Ferramentas complementares importantes

Ferramenta Função
  --------------- ----------------------
UniProt banco de proteínas
KEGG vias metabólicas
PDB estruturas 3D
Ensembl genomas anotados
Clustal Omega alinhamento múltiplo

------------------------------------------------------------------------

# 🚀 Conclusão

Ferramentas como **NCBI, BLAST, SIFT e PolyPhen** são essenciais para:

- análise de genes
- estudo de mutações
- pesquisa biomédica
- desenvolvimento de medicamentos

Elas permitem transformar **dados genéticos brutos em conhecimento
biológico**.
