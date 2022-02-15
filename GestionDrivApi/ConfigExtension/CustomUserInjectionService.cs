using GestionDrivApi.Repositories;
using Microsoft.Extensions.DependencyInjection;

namespace GestionDrivApi.ConfigExtension
{
    public static class CustomUserInjectionService
    {
        public static void AddCustomUserInjectionService(this IServiceCollection services)
        {
            services.AddTransient<UserRepository, UserRepository>();
            services.AddTransient<RayonRepository, RayonRepository>();
            services.AddTransient<CategoryRepository, CategoryRepository>();
            services.AddTransient<UnitRepository, UnitRepository>();
<<<<<<< HEAD
=======
            services.AddTransient<CommandeRepository, CommandeRepository>();
            services.AddTransient<ProductRepository, ProductRepository>();
>>>>>>> main
        }
    }
}
