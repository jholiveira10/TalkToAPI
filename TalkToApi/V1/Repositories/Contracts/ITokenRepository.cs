using TalkToApi.V1.Models;

namespace TalkToApi.V1.Repositories.Contracts
{
    public interface ITokenRepository
    {
        //Cadastrar - Ler - Atualizad (CRU)
        void Cadastrar(Token token);

        Token Obter(string refreshToken);

        void Atualizar(Token token);
    }
}
