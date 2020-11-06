class linearRegressionOO {
  
  train(config={}) {
    config.input ? this.X = config.input : this.X = [0];
    config.output ? this.Y = config.output : this.Y = [0];
  }

  produto(x=[], y=[]) {
    let temp = [];
    for(let i=0; i<x.length; i++)
      temp.push(parseFloat(x[i]) * parseFloat(y[i]));
    return temp;
  }

  quadrados(x=[]) {
    let temp = [];
    for(let i = 0; i < x.length; i++)
      temp.push(parseFloat(x[i]) * parseFloat(x[i]));
    return temp;
  }

  somatorio(x=[]) {
    let temp = 0;
    for(let i = 0; i < x.length; i++)
      temp += parseFloat(x[i]);
    return temp;
  }

  media(x=[]) {
    return this.somatorio(x) / x.length;
  }

  resultados(x=[], y=[], p=0) {
    const resultado1 = (this.somatorio(x) * this.somatorio(y)) / x.length;
    const resultado2 = (this.somatorio(x) * this.somatorio(x)) / x.length;
    const resultado3 = this.somatorio(this.produto(x, y)) - resultado1;
    const resultado4 = resultado3 / (this.somatorio(this.quadrados(x)) - resultado2);
    const resultado5 = this.media(y) - (resultado4 * this.media(x));

    return ((resultado4 * p) + resultado5).toFixed(0);
  }

  predict(p=[]) {
    
    let regressoes = [];
    for(let i = 0; i < p.length; i++) {
      const temp = Number(this.resultados(this.X, this.Y, p[i]));
      regressoes.push(temp);
    }
    return regressoes;
    
  }

}

module.exports = linearRegressionOO