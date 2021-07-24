import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { Observable } from "rxjs";

export class InMemoryDatabase implements InMemoryDbService {
    createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
        const products: any[] = [
            { id: 1, path: '.\\assets\\img\\product_1.png', price: '119,90', title: 'Pijaminha kawaii', description: 'Já deu uma passadinha na nossa seção kawaii? Corre lá e surpreenda-se! Muitas novidades e preços incríveis.' },
            { id: 2, path: '.\\assets\\img\\product_2.png', price: '67,20', title: 'Brincos da vitalidade + Brinde Choker', description: 'Promoção: Leve 2, pague 1! Na compra de um par de brincos ganhe um choker combinando!' },
            { id: 3, path: '.\\assets\\img\\product_3.png', price: '150,10', title: 'Manto Demonslayer Feminino', description: 'Nossa loja tem uma seção exclusiva de roupas para Cosplayers, com tendências sempre em alta e preços super em baixa. Aproveite.' }
        ];
        return { products }
    }
}