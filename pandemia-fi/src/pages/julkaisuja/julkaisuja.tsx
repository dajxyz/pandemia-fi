import React from "react";
import {Box, Card, Flex, Heading} from "rebass";
import CategoryBadge from "../../components/categorybadge";
import publications from './publications.json';

const allPublications = publications.map(p => ({
  date: p.Date,
  name: p.Article,
  authors: p.Author,
  journal: p.Journal,
  citations: (p['Citations 17-03-2020'] || 0) as number,
  n: (p.n || 0) as number,
  if: p.IF,
  link: p.DOI,
  tags: p.tags.split(",").map(t => t.trim()).filter(t => !!t)
}));

const categories = allPublications.map(p => p.tags).reduce((acc, t) => acc.concat(t), []).reduce<Array<string>>((acc, t) => {
  if (!acc.includes(t)) {
    acc.push(t);
  }
  return acc
}, []);

const colorsAndBgs = [
  {
    color: '#fff',
    bg: '#3150AE',
  },
  {
    color: '#fff',
    bg: '#5948A5',
  },
  {
    color: '#fff',
    bg: '#3A6579',
  },
  {
    color: '#fff',
    bg: '#875050',
  },
  {
    color: '#fff',
    bg: '#1E4454',
  },
  {
    color: '#fff',
    bg: '#AA5069',
  },
  {
    color: '#fff',
    bg: '#E38731',
  },
  {
    color: '#fff',
    bg: '#808C91',
  },
  {
    color: '#fff',
    bg: '#8D4381',
  },
  {
    color: '#fff',
    bg: '#B86500',
  },
];

const tagMapColors: Map<string, { color: string, bg: string }> = new Map();

categories.forEach((c, i) => {
  tagMapColors.set(c, colorsAndBgs[i % colorsAndBgs.length]);
});

console.log(categories, colorsAndBgs, tagMapColors);

interface Publication {
  date: string;
  name: string;
  authors: string;
  n: number;
  citations: number;
  journal: string;
  if: number | string;
  tags: Array<string>;
  link: string;
}

interface State {
  page: number,
  perPage: number,
  current: Array<Publication>;
  sort: keyof Publication;
  sortDir: 'asc' | 'desc';
  categories: Array<string>;
  filter: string;
}

/**
 * Julkaisuja section of the website
 */
export default class Julkaisuja extends React.Component<{}, State> {
  state: State = {
    page: 0,
    perPage: 15,
    current: allPublications,
    sort: 'if',
    sortDir: 'desc',
    filter: '',
    categories
  };

  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<State>, snapshot?: any): void {
    if (prevState.filter !== this.state.filter) {
      const current = allPublications.filter(p => {
        if (!!this.state.filter) {
          return (
            p.date.includes(this.state.filter) ||
            p.name.includes(this.state.filter) ||
            p.authors.includes(this.state.filter) ||
            p.citations.toString().includes(this.state.filter) ||
            p.journal.includes(this.state.filter) ||
            p.if.toString().includes(this.state.filter) ||
            p.tags.includes(this.state.filter)
          )
        } else {
          return true;
        }
      });
      this.setState({current, page: 0});
    }
  }

  render() {
    return (
      <Flex flexWrap="wrap" sx={{p: 0}}>
        <Box width={[1]} sx={{p: 0}}>
          <Card sx={{p: 0, maxWidth: "100%"}}>
            <Heading sx={{fontSize: 4, p: 2, pb: 1}}>Tieteellisiä julkaisuja</Heading>
            <p>Inkluusiokriteerinä on artikkelin aihe: SARS-Cov-2-virus, josta käytetään myös termejä HCov-19 ja SARS-2;
              kyseisen viruksen aiheuttama sairaus, COVID-19; kyseisen viruksen leviämisen ehkäisy sekä sairauden hoito.
              Listan artikkelit on valikoitu yli 600 artikkelin joukosta journaalin vaikuttavuuskertoimen, artikkelin
              viittausmäärän ja mediaseurannan perusteella.</p>
            <p>Verkossa on useita kokoelmia tutkimusta, mutta tämä on tietääksemme ainoa kuratoitu sellainen. Paras
              lähde kaiken aiheen tutkimuksen seurantaan on
              vasta-avattu <a href="https://www.ncbi.nlm.nih.gov/research/coronavirus/">LitCovid</a>-palvelu, jonka
              tuottaa Amerikkalainen National Center for Biotechnology Information (tunnettu <a
                href="https://www.ncbi.nlm.nih.gov/pubmed/">PubMed</a>:istä). Suodattamattomia tietokantoja
              akateemisesta tutkimuksesta löytyy mm. <a
                href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/global-research-on-novel-coronavirus-2019-ncov">WHO</a>:n, <a
                href="https://www.microsoft.com/en-us/research/project/academic/articles/microsoft-academic-resources-and-their-application-to-covid-19-research/">Microsoft
                Academicin</a> sekä <a href="https://pages.semanticscholar.org/coronavirus-research">Semantic
                Scholarin</a> verkkosivuilta.
            </p>
          </Card>
          <Card sx={{p: 0, maxWidth: "100%"}}>
            {this.state.categories.map(t => {
              const color: { color: string, bg: string } = tagMapColors.get(t)!;
              return <div onClick={() => this.setState({filter: t})}
                          style={{cursor: 'pointer', display: 'inline-block', margin: 3}}>
                <CategoryBadge title={t} color={color.color} bg={color.bg}/>
              </div>;
            })}
            <br/>
            <input placeholder="search" value={this.state.filter}
                   onChange={e => this.setState({filter: e.currentTarget.value})}/>
            <table>
              <thead>
              <tr>
                <th onClick={() => this.setState({
                  sort: 'date',
                  sortDir: this.state.sort === 'date' ? (this.state.sortDir === 'asc' ? 'desc' : 'asc') : 'desc'
                })}>Päivämäärä&nbsp;{this.renderSort('date')}</th>
                <th onClick={() => this.setState({
                  sort: 'name',
                  sortDir: this.state.sort === 'name' ? (this.state.sortDir === 'asc' ? 'desc' : 'asc') : 'desc'
                })}>Artikkelin nimi&nbsp;{this.renderSort('name')}</th>
                <th onClick={() => this.setState({
                  sort: 'authors',
                  sortDir: this.state.sort === 'authors' ? (this.state.sortDir === 'asc' ? 'desc' : 'asc') : 'desc'
                })}>Kirjoittanut&nbsp;{this.renderSort('authors')}</th>
                <th onClick={() => this.setState({
                  sort: 'citations',
                  sortDir: this.state.sort === 'citations' ? (this.state.sortDir === 'asc' ? 'desc' : 'asc') : 'desc'
                })}>Citations&nbsp;{this.renderSort('citations')}</th>
                <th onClick={() => this.setState({
                  sort: 'journal',
                  sortDir: this.state.sort === 'journal' ? (this.state.sortDir === 'asc' ? 'desc' : 'asc') : 'desc'
                })}>Journaali&nbsp;{this.renderSort('journal')}</th>
                <th onClick={() => this.setState({
                  sort: 'if',
                  sortDir: this.state.sort === 'if' ? (this.state.sortDir === 'asc' ? 'desc' : 'asc') : 'desc'
                })}>IF&nbsp;{this.renderSort('if')}</th>
                <th onClick={() => this.setState({
                  sort: 'tags',
                  sortDir: this.state.sort === 'tags' ? (this.state.sortDir === 'asc' ? 'desc' : 'asc') : 'desc'
                })}>Tags&nbsp;{this.renderSort('tags')}</th>
              </tr>
              </thead>
              <tbody>
              {this.state.current
                .sort((p1, p2) => {
                  if (typeof p1[this.state.sort] === 'number' && typeof p2[this.state.sort] === 'number') {
                    const sort = p1[this.state.sort] > p2[this.state.sort] ? 1 : (p1[this.state.sort] < p2[this.state.sort] ? -1 : 0);
                    return this.state.sortDir === 'asc' ? sort : sort * -1;
                  }
                  try {
                    const sort = ((p1[this.state.sort] || '') as any).compareTo((p2[this.state.sort] || ''));
                    return this.state.sortDir === 'asc' ? sort : sort * -1;
                  } catch {
                    try {
                      const sort = ((p1[this.state.sort] || '') as any).localeCompare((p2[this.state.sort] || ''));
                      return this.state.sortDir === 'asc' ? sort : sort * -1;
                    } catch {
                      return -1;
                    }
                  }
                })
                .filter((c, i) => i >= (this.state.page * this.state.perPage) && i < ((this.state.page + 1) * this.state.perPage))
                .map((publication, i) =>
                  <tr key={i}>
                    <td>{publication.date}</td>
                    <td><a target="_blank" href={publication.link}>{publication.name}</a></td>
                    <td>{publication.authors}</td>
                    <td>{publication.citations}</td>
                    <td>{publication.journal}</td>
                    <td>{publication.if}</td>
                    <td>{publication.tags.map(t => {
                      const color: { color: string, bg: string } = tagMapColors.get(t)!;
                      return <div style={{display: 'inline-block', margin: 3}}>
                        <CategoryBadge title={t} color={color.color} bg={color.bg}/>
                      </div>;
                    })}</td>
                  </tr>
                )}
              </tbody>
            </table>
            <div>
              <div>
                Näytetään
                rivit {(this.state.perPage * this.state.page) + 1} - {Math.min(this.state.current.length, this.state.perPage * (1 + this.state.page))} (yhteensä {this.state.current.length})
              </div>
              <div>
                <button onClick={() => this.setState({page: Math.max(0, this.state.page - 1)})}>Edellinen</button>
                {this.renderPages()}
                <button
                  onClick={() => this.setState({page: Math.min(this.state.page + 1, Math.floor(this.state.current.length / this.state.perPage))})}>Seuraava
                </button>
              </div>
            </div>
          </Card>
        </Box>
      </Flex>
    );
  }

  renderSort(name: string) {
    if (this.state.sort === name) {
      if (this.state.sortDir === 'desc') {
        return <span>&darr;</span>
      } else {
        return <span>&uarr;</span>
      }
    } else {
      return null;
    }
  }

  renderPages() {
    const buttons = [];
    for (let i = 0; i < this.state.current.length; i = i + this.state.perPage) {
      let page = Math.floor(i / this.state.perPage);
      buttons.push(
        <button style={{fontWeight: this.state.page === page ? 'bold' : 'inherit'}}
                onClick={() => this.setState({page: page})}>{(page) + 1}</button>
      )
    }
    return buttons;
  }
};
