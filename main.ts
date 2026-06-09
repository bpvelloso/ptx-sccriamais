/**
 * Custom blocks
 */
//% weight=50 color=#e7660b icon="\uf1ba"
//% groups='["SC Cria+","Robô"]'
namespace sc_cria_mais {
    /**
     * Move robot forward (or backward) at speed.
     * @param direction Move Forward or Reverse
     * @param speed speed of motor between 0 and 100. eg: 60
     */
    //% blockId="sccriamais_para_frente" block="go%direction|at speed%speed|\\%"
    //% v_esquerda.min=0 v_esquerda.max=100
    //% v_direita.min=0 v_direita.max=100
    //% weight=100
    //% subcategory=robo
    //% group="Robô"
    //% blockGap=8
    export function para_frente(v_esquerda: number, v_direita:number): void {
        basic.showNumber(0)
    }

    /**
     * Move robot forward (or backward) at speed.
     * @param direction Move Forward or Reverse
     * @param speed speed of motor between 0 and 100. eg: 60
     */
    //% blockId="sccriamais_parar" block="go%direction|at speed%speed|\\%"
    //% weight=100
    //% subcategory=robo
    //% group="SC Cria+"
    //% blockGap=8
    export function parar(): void {
        basic.showNumber(1)
    }
}
