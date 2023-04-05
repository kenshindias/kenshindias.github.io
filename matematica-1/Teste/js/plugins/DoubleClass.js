/*:
 * @plugindesc Plugin que permite que os atores possuam duas classes distintas.
 * @author [SEU NOME]
 *
 * @help
 * Com este plugin, os atores poderão ter duas classes distintas, permitindo que eles tenham habilidades e atributos de ambas.
 *
 * Para adicionar uma segunda classe para o ator, basta ir até o menu de status e escolher a opção "Change Class". Uma vez na tela de seleção de classe, selecione a segunda classe desejada e pressione OK para confirmar.
 *
 * Este plugin não requer nenhum parâmetro ou configuração adicional.
 *
 * @version 1.0.0
 */
(function() {

  // Sobrescreve a função 'classes' do Game_Actor
  Game_Actor.prototype.classes = function() {
      return [this._classId, this._subclassId];
  };

  // Adiciona uma nova propriedade '_subclassId' à classe Game_Actor
  Object.defineProperty(Game_Actor.prototype, '_subclassId', {
      get: function() {
          return this._subclassId;
      },
      set: function(subclassId) {
          this._subclassId = subclassId;
          this.refresh();
      },
      configurable: true
  });

})();
