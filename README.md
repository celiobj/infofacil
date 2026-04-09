# InfoFácil - App Ionic com OData

Aplicação Ionic/Angular que demonstra integração com API OData da Plantar Forest.

## 🚀 Como executar

### Desenvolvimento com Proxy (Recomendado)
Para resolver problemas de CORS durante o desenvolvimento:

```bash
npm run dev
```

Este comando inicia simultaneamente:
- **Servidor Proxy** (porta 3001) - Redireciona chamadas OData
- **App Ionic** (porta 8100) - Aplicação principal

### Desenvolvimento Simples
```bash
npm start
```

### Build de Produção
```bash
npm run build
```

## 🔧 Configuração da API OData

### Credenciais
- **URL**: `https://grupoplantar.mendixcloud.com/odata/pos_apontamento/v1`
- **Usuário**: `ws.plantarforest`
- **Senha**: `PLws@2025`

### Endpoints Disponíveis
- `ConsultaApontamentos` - Consulta de apontamentos
- Outros endpoints podem estar disponíveis - verifique os metadados

## 🛠️ Arquitetura

### Serviços
- `OdataService` - Gerencia chamadas para a API OData com autenticação

### Componentes
- `HomePage` - Página principal com demonstração da API OData

### Proxy
- `proxy-server.js` - Servidor proxy Node.js para desenvolvimento
- `proxy.conf.json` - Configuração do proxy Angular

## 🔒 Segurança

- Credenciais armazenadas no código (apenas para desenvolvimento)
- Para produção, use variáveis de ambiente ou serviço de configuração seguro
- Autenticação Basic HTTP

## 📱 Funcionalidades

- ✅ Chamadas OData com autenticação
- ✅ Tratamento de erros e loading states
- ✅ Interface responsiva com Ionic
- ✅ Teste de diferentes endpoints
- ✅ Resolução de CORS para desenvolvimento

## 🐛 Troubleshooting

### Erro CORS
Se encontrar erro de CORS:
1. Use `npm run dev` para iniciar com proxy
2. Ou instale extensão "CORS Unblock" no navegador

### Erro 404
Verifique se o endpoint existe na API. Use os botões de teste na página Home.

### Erro de Autenticação
Verifique se as credenciais estão corretas no `OdataService`.