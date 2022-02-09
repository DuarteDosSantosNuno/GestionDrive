using GestionDrivApi.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GestionDrivApi.Repositories
{
    public class UserRepository
    {
        private readonly UserManager<Personne> _userManager;

        public UserRepository(UserManager<Personne> userManager)
        {
            _userManager = userManager;
        }

        public async Task<List<Personne>> Findall()
        {
            return await _userManager.Users.ToListAsync();
        }
    }
}
