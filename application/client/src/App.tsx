import * as React from 'react';
import './App.css';

const logo = require('./logo.svg');

class App extends React.Component<{}, {}> {
  state = {
    versionGroups: [],
    versions: [],
    pokemon: [],
    abilities: [],
    pokemonAbilities: []
  };

  getVersionGroups = () => {
    return fetch('/api/versionGroups')
      .then(response => response.json())
      .then(json => this.setState({ versionGroups: json.versionGroups }))
      .then(json => console.log(`fetched versionGroups from api`))
  }

  getVersions = () => {
    return fetch('/api/versions')
      .then(response => response.json())
      .then(json => this.setState({ versions: json.versions }))
      .then(json => console.log(json))
  }

  getPokemon = () => {
    return fetch('/api/pokemon')
      .then(response => response.json())
      .then(json => this.setState({ pokemon: json.pokemon }))
      .then(json => console.log(json))
  }

  getAbilities = () => {
    return fetch('/api/abilities')
      .then(response => response.json())
      .then(json => this.setState({ abilities: json.abilities }))
      .then(json => console.log(json))
  }

  getPokemonAbilities = () => {
    return fetch('/api/pokemon/abilities')
      .then(response => response.json())
      .then(json => this.setState({ pokemonAbilities: json.abilities }))
      .then(json => console.log(json))
  }

  render() {

    const versionGroups = this.state.versionGroups.map(versionGroup => (
      <li key={versionGroup['id']}>{versionGroup['name']}</li>
    ));
    const versions = this.state.versions.map(version => (
      <li key={version['id']}>{version['name']}</li>
    ));
    const pokemon = this.state.pokemon.map(pokemon => (
      <li key={pokemon['id']}>{pokemon['name']}</li>
    ));
    const abilities = this.state.abilities.map(ability => (
      <li key={ability['id']}>{ability['name']}</li>
    ));
    const pokemonAbilities = this.state.pokemonAbilities.map(pokemonAbility => (
      <li key={pokemonAbility['id']}>`{pokemonAbility['name']} : {JSON.stringify(pokemonAbility['ability'])}`</li>
    ));

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Pokmeon Data</h2>
        </div>
        <ul>
          <li><button onClick={this.getVersionGroups}>Get Version Groups</button><ul>{versionGroups}</ul></li>
          <li><button onClick={this.getVersions}>Get Versions</button><ul>{versions}</ul></li>
          <li><button onClick={this.getPokemon}>Get Pokemon</button><ul>{pokemon}</ul></li>
          <li><button onClick={this.getAbilities}> Get Abilities</button><ul>{abilities}</ul></li>
          <li><button onClick={this.getPokemonAbilities}>Get Pokemon Abilities</button><ul>{pokemonAbilities}</ul></li>
        </ul>
      </div>
    );
  }
}

export default App;