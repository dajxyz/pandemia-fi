import React from "react";
import { Card, Heading, Text, Link } from "rebass";

/**
 * Introduction text as a component
 */
const Introduction = () => {
  return (
    <>
      <Card sx={{ p: 0, maxWidth: "100%" }}>
        <Heading sx={{ fontSize: 4, p: 0, pb: 1 }}>
          Tieteellisiä julkaisuja
        </Heading>
        <Text sx={{ py: 1 }}>
          Inkluusiokriteerinä on artikkelin aihe: SARS-Cov-2-virus, josta
          käytetään myös termejä HCov-19 ja SARS-2; kyseisen viruksen aiheuttama
          sairaus, COVID-19; kyseisen viruksen leviämisen ehkäisy sekä sairauden
          hoito. Listan artikkelit on valikoitu yli 600 artikkelin joukosta
          journaalin vaikuttavuuskertoimen, artikkelin viittausmäärän ja
          mediaseurannan perusteella.
        </Text>
        <Text sx={{ py: 1, pb: 3 }}>
          Verkossa on useita kokoelmia tutkimusta, mutta tämä on tietääksemme
          ainoa kuratoitu sellainen. Paras lähde kaiken aiheen tutkimuksen
          seurantaan on vasta-avattu{" "}
          <Link href="https://www.ncbi.nlm.nih.gov/research/coronavirus/">
            LitCovid
          </Link>
          -palvelu, jonka tuottaa Amerikkalainen National Center for
          Biotechnology Information (tunnettu{" "}
          <Link href="https://www.ncbi.nlm.nih.gov/pubmed/">PubMed</Link>:istä).
          Suodattamattomia tietokantoja akateemisesta tutkimuksesta löytyy mm.{" "}
          <Link href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/global-research-on-novel-coronavirus-2019-ncov">
            WHO
          </Link>
          :n,{" "}
          <Link href="https://www.microsoft.com/en-us/research/project/academic/articles/microsoft-academic-resources-and-their-application-to-covid-19-research/">
            Microsoft Academicin
          </Link>{" "}
          sekä{" "}
          <Link href="https://pages.semanticscholar.org/coronavirus-research">
            Semantic Scholarin
          </Link>{" "}
          verkkosivuilta.
        </Text>
      </Card>
    </>
  );
};

export default Introduction;
