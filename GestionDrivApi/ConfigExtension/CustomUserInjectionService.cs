using GestionDrivApi.Repositories;
using Microsoft.Extensions.DependencyInjection;

namespace GestionDrivApi.ConfigExtension
{
    public static class CustomUserInjectionService
    {
        public static void AddCustomUserInjectionService(this IServiceCollection services)
        {
            services.AddTransient<UserRepository, UserRepository>();
        }
    }
}
