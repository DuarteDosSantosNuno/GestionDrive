using GestionDrivApi.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
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

        public async Task<IdentityResult> Modify(Personne user)
        {
            Personne foundUser = await _userManager.FindByEmailAsync(user.Email);

            if (foundUser != null)
            {
                foundUser.Nom = user.Nom;
                foundUser.Prenom = user.Prenom;
            }

            return await _userManager.UpdateAsync(foundUser);
        }
    }
}
