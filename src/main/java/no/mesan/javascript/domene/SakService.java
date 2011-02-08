package no.mesan.javascript.domene;

/**
 * Service for operasjoner på saker.
 *
 * @author Christian Ihle
 */
public interface SakService {

    /**
     * Oppdaterer tittel på en sak.
     *
     * @param id Id til saken som skal oppdateres.
     * @param tittel Tittelen som skal settes på saken.
     * @return Den oppdaterte saken.
     */
    Sak oppdaterTittel(Long id, String tittel);

    /**
     * Henter sak med angitt id.
     *
     * @param id Id til saken som ønskes.
     * @return Saken som ble funnet.
     */
    Sak hentSak(Long id);
}
