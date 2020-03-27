import React from "react";
import { Card, Flex, Box, Heading, Text, Link } from "rebass";

import Person from "./person";

const About: React.FunctionComponent = () => {
  return (
    <Flex flexWrap="wrap" py={2}>
      <Box p={2} width={[1]}>
        <Card p={3}>
          <Heading>Tietoa meistä</Heading>
          {/* <Text
            sx={{
              mt: 2,
              mb: 4,
            }}
          >
            Alaotsikko
          </Text> */}

          <Box
            sx={{
              mt: 3,
              maxWidth: "38em",
            }}
          >
            <Heading
              as="h3"
              sx={{
                fontSize: 3,
              }}
            >
              Tietoa sivustosta
            </Heading>
            <Text
              sx={{
                mt: 2,
              }}
            >
              Keräämme tälle sivustolle yhteen tietoa käynnissä olevasta
              koronavirusepidemiasta.
            </Text>
            <Text
              sx={{
                mt: 2,
              }}
            >
              Julkaisemme mm. tilastoja, graafeja, reaaliaikaista seurantaa,
              vertaisarvioituja tutkimuksia, viranomaisten toimenpiteitä ja
              ohjeita sekä medianostoja.{" "}
            </Text>
            <Text
              sx={{
                mt: 2,
              }}
            >
              Sivustoa ylläpitää ja päivittää joukko ilmiöstä monesta eri
              näkökulmasta kiinnostunutta eri alan asiantuntijaa. Työryhmä
              käsittää tällä hetkellä n. 10 ihmistä. Jos olet kiinnostunut
              osallistumaan työskentelyyn liity{" "}
              <Link
                href="https://forms.gle/LeTa7zvp6JoFuHPb7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook-ryhmään
              </Link>{" "}
              tai ota yhteyttä{" "}
              <Link href="mailto:info@pandemia.fi">info@pandemia.fi</Link>.
            </Text>
          </Box>

          <Heading
            sx={{
              fontSize: 3,
              mt: 4,
              mb: 2,
            }}
          >
            Päätoimittajat
          </Heading>

          <Person name="Daniel Jyllikoski">
            <Text>
              Seurannut koronavirusta ammatikseen tammikuun alkuviikoista asti.
              Hänen{" "}
              <Link
                href="https://www.ajmd.fi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                yrityksensä
              </Link>{" "}
              on toiminut neuvonantajana kahdelle kiinalaiselle suuryritykselle
              ja eurooppalaiselle lentoyhtiölle koronavirus-viestintään ja
              -varautumiseen liittyvissä asioissa.{" "}
            </Text>
            <Text
              sx={{
                mt: 2,
              }}
            >
              <Link
                href="https://jyllikoski.fi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Yhteystiedot
              </Link>
              , puhelin <Link href="tel:+358923163506">+358 9 2316 3506</Link>{" "}
              klo 9:00 ja 24:00 välillä.
            </Text>
          </Person>

          <Person name="Otto Juote">
            <Text>
              Viestintäkonsultti, joka on toiminut aiemmin Euroopan parlamentin
              virkamiehenä ja Eurooppaministerin erityisavustajana. Otto on
              valmistunut maisteriksi London School of Economics:sta, jossa
              hänen pääaineensa oli Biomedicine, Bioscience and Society.{" "}
              <Link
                href="https://www.linkedin.com/in/danieljyllikoski/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Link>
              .
            </Text>
          </Person>
          <Person name="Jari Kuikanmäki">
            <Text>
              Sovelluskehittäjä ja yhteiskunnallinen keskustelija.{" "}
              <Link
                href="https://twitter.com/jarikuikanmaki"
                target="_blank"
                rel="noopener noreferrer"
              >
                @jarikuikanmaki
              </Link>
            </Text>
          </Person>
          <Person name="Jaakko Kulhia">
            <Text>
              Lääkäri, joka sairaalatyönsä ohella harrastaa matematiikkaa ja
              ohjelmointia. Hän on koulutukseltaan luonnontieteiden kandidaatti
              (pääaineena matematiikka) ja lääketieteen lisensiaatti.
            </Text>
          </Person>
        </Card>
      </Box>
    </Flex>
  );
};

export default About;
