package project1.security;

import java.security.Key;
import java.util.Date;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtUtil {

    // Secret Key (must be at least 32 characters)
    private static final String SECRET_KEY =
            "mysecretkeymysecretkeymysecretkey12";

    // Token validity (24 hours)
    private static final long EXPIRATION_TIME =
            1000 * 60 * 60 * 24;

    // Generate signing key
    private Key getSignKey() {
        return Keys.hmacShaKeyFor(SECRET_KEY.getBytes());
    }

    // Generate JWT Token
    public String generateToken(UserDetails userDetails) {

        return Jwts.builder()
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date())
                .setExpiration(
                        new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(getSignKey(), SignatureAlgorithm.HS256)
                .compact();
    }

    // Extract username from token
    public String extractUsername(String token) {
        return extractAllClaims(token).getSubject();
    }

    // Extract all claims
    private Claims extractAllClaims(String token) {

        return Jwts.parserBuilder()
                .setSigningKey(getSignKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    // Validate token
    public boolean validateToken(String token,
                                 UserDetails userDetails) {

        String username = extractUsername(token);

        return username.equals(userDetails.getUsername())
                && !isTokenExpired(token);
    }

    // Check token expiry
    private boolean isTokenExpired(String token) {

        return extractAllClaims(token)
                .getExpiration()
                .before(new Date());
    }
}