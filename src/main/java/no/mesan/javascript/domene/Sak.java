package no.mesan.javascript.domene;

/**
 * Klasse
 *
 * @author Christian Ihle
 */
public class Sak {

    private Long id;
    private String tittel;
    private String beskrivelse;
    private SakStatus sakStatus;

    public Sak(final Long id, final String tittel, final String beskrivelse, final SakStatus sakStatus) {
        this.id = id;
        this.tittel = tittel;
        this.beskrivelse = beskrivelse;
        this.sakStatus = sakStatus;
    }

    public Long getId() {
        return id;
    }

    public void setId(final Long id) {
        this.id = id;
    }

    public String getTittel() {
        return tittel;
    }

    public void setTittel(final String tittel) {
        this.tittel = tittel;
    }

    public String getBeskrivelse() {
        return beskrivelse;
    }

    public void setBeskrivelse(final String beskrivelse) {
        this.beskrivelse = beskrivelse;
    }

    public SakStatus getSakStatus() {
        return sakStatus;
    }

    public void setSakStatus(final SakStatus sakStatus) {
        this.sakStatus = sakStatus;
    }
}
